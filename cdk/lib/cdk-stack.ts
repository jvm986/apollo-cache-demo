import * as cdk from "aws-cdk-lib";
import {
  CorsHttpMethod,
  DomainName,
  HttpApi,
  HttpMethod,
} from "aws-cdk-lib/aws-apigatewayv2";
import { HttpUserPoolAuthorizer } from "aws-cdk-lib/aws-apigatewayv2-authorizers";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as cloudfront_origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as cognito from "aws-cdk-lib/aws-cognito";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as targets from "aws-cdk-lib/aws-route53-targets";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
import * as path from "path";

export interface Props extends cdk.StackProps {
  stage: string;
  domainName: string;
}

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);

    const hostedZone = new route53.HostedZone(this, "hosted-zone", {
      zoneName: props.domainName,
    });

    const cloudFrontCertificate = new acm.DnsValidatedCertificate( // The suggested Certificate class does not support region
      this,
      "site-certificate",
      {
        domainName: props.domainName,
        hostedZone: hostedZone,
        subjectAlternativeNames: [`*.${props.domainName}`],
        validation: acm.CertificateValidation.fromDns(hostedZone),
        region: "us-east-1", // CloudFront only checks us-east-1 region for certificates
      }
    );

    const certificate = new acm.Certificate(this, "api-certificate", {
      domainName: props.domainName,
      validation: acm.CertificateValidation.fromDns(hostedZone),
      subjectAlternativeNames: [`*.${props.domainName}`],
    });

    const cloudfrontOAI = new cloudfront.OriginAccessIdentity(
      this,
      "cloudfront-oai",
      {
        comment: `OAI for ${props?.stackName}`,
      }
    );

    const siteBucket = new s3.Bucket(this, "site-bucket", {
      bucketName: `${props?.stackName}-site-bucket-${props.stage}`,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    siteBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ["s3:GetObject"],
        resources: [siteBucket.arnForObjects("*")],
        principals: [
          new iam.CanonicalUserPrincipal(
            cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId
          ),
        ],
      })
    );

    const distribution = new cloudfront.Distribution(
      this,
      "site-distribution",
      {
        defaultRootObject: "index.html",
        minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
        defaultBehavior: {
          origin: new cloudfront_origins.S3Origin(siteBucket, {
            originAccessIdentity: cloudfrontOAI,
          }),
          compress: true,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        domainNames: [`app.${props.domainName}`],
        certificate: cloudFrontCertificate,
        errorResponses: [
          {
            httpStatus: 403,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
            ttl: cdk.Duration.seconds(0),
          },
          {
            httpStatus: 404,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
            ttl: cdk.Duration.seconds(0),
          },
        ],
      }
    );

    distribution.addBehavior(
      `app.${props.domainName}`,
      new cloudfront_origins.S3Origin(siteBucket),
      {
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      }
    );

    new route53.ARecord(this, "alias-record", {
      zone: hostedZone,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
      recordName: "app",
    });

    new s3deploy.BucketDeployment(this, "deploy-with-invalidation", {
      sources: [
        s3deploy.Source.asset(path.join(__dirname, "../../client/dist")),
      ],
      destinationBucket: siteBucket,
      distribution,
      distributionPaths: ["/*"],
    });

    const userPool = new cognito.UserPool(this, "user-pool", {
      selfSignUpEnabled: false,
      signInAliases: {
        email: true,
      },
      autoVerify: {
        email: true,
      },
    });

    new cognito.CfnUserPoolGroup(this, "admin-group", {
      groupName: "admin",
      userPoolId: userPool.userPoolId,
    });

    new cognito.CfnUserPoolGroup(this, "user-group", {
      groupName: "user",
      userPoolId: userPool.userPoolId,
    });

    new cognito.UserPoolDomain(this, "user-pool-domain", {
      userPool,
      cognitoDomain: {
        domainPrefix: `${props.stackName}-${props.stage}`,
      },
    });

    const cognitoAuthorizer = new HttpUserPoolAuthorizer(
      "cognito-authorizer",
      userPool
    );

    const presentationTable = new dynamodb.Table(this, "presentation-table", {
      tableName: `${props.stackName}-presentation-table-${props.stage}`,
      partitionKey: { name: "pk", type: dynamodb.AttributeType.STRING },
      sortKey: { name: "sk", type: dynamodb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    presentationTable.addGlobalSecondaryIndex({
      indexName: "gsi1",
      projectionType: dynamodb.ProjectionType.ALL,
      partitionKey: {
        name: "gsi1Pk",
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: "gsi1Sk",
        type: dynamodb.AttributeType.STRING,
      },
    });

    presentationTable.addGlobalSecondaryIndex({
      indexName: "gsi2",
      projectionType: dynamodb.ProjectionType.ALL,
      partitionKey: {
        name: "gsi2Pk",
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: "gsi2Sk",
        type: dynamodb.AttributeType.STRING,
      },
    });

    const graphqlServerLambda = new NodejsFunction(this, "graphql-server", {
      functionName: `${props.stackName}-graphql-server-${props.stage}`,
      runtime: lambda.Runtime.NODEJS_18_X,
      architecture: lambda.Architecture.ARM_64,
      entry: path.join(__dirname, "../../server/src/handler.ts"),
      memorySize: 1024,
      logRetention: cdk.aws_logs.RetentionDays.ONE_WEEK,
      environment: {
        SERVICE_NAME: `${props.stackName}-graphql-server-${props.stage}`,
        DYNAMODB_TABLE_NAME: presentationTable.tableName,
      },
      tracing: lambda.Tracing.ACTIVE,
    });

    const timestreamPolicy = new iam.PolicyStatement({
      actions: ["timestream:Select", "timestream:DescribeEndpoints"],
      resources: ["*"],
    });

    graphqlServerLambda.role?.attachInlinePolicy(
      new iam.Policy(this, "timestream-policy", {
        statements: [timestreamPolicy],
      })
    );

    presentationTable.grantReadWriteData(graphqlServerLambda);

    const graphqlServerIntegration = new HttpLambdaIntegration(
      "graphql-server-integration",
      graphqlServerLambda
    );

    const apiDomainName = new DomainName(this, "api-domain-name", {
      domainName: `api.${props.domainName}`,
      certificate: certificate,
    });

    const httpApi = new HttpApi(this, "graphql-api", {
      defaultDomainMapping: {
        domainName: apiDomainName,
      },
      apiName: `${props.stackName}-graphql-api`,
      corsPreflight: {
        allowOrigins: [
          "https://" + distribution.distributionDomainName,
          `https://app.${props.domainName}`,
        ],
        allowHeaders: ["*"],
        allowMethods: [
          CorsHttpMethod.GET,
          CorsHttpMethod.POST,
          CorsHttpMethod.OPTIONS,
        ],
        maxAge: cdk.Duration.days(10),
      },
    });

    httpApi.addRoutes({
      path: "/graphql",
      methods: [HttpMethod.GET, HttpMethod.POST],
      integration: graphqlServerIntegration,
      authorizer: cognitoAuthorizer,
    });

    new route53.ARecord(this, "api-alias-record", {
      zone: hostedZone,
      target: route53.RecordTarget.fromAlias(
        new targets.ApiGatewayv2DomainProperties(
          apiDomainName.regionalDomainName,
          apiDomainName.regionalHostedZoneId
        )
      ),
      recordName: "api",
    });
  }
}
