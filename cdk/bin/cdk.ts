#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { InfraStack } from "../lib/cdk-stack";

type Environment = "dev" | "prd";

const environments: Record<Environment, { account: string; region: string }> = {
  dev: {
    account: "111111111111",
    region: "eu-central-1",
  },
  prd: {
    account: "222222222222",
    region: "eu-central-1",
  },
};

const stage = (process.env.STAGE?.toLowerCase() || "dev") as Environment;

if (!environments[stage]) {
  throw new Error(
    `Invalid stage: ${stage}. Valid stages are: ${Object.keys(
      environments
    ).join(", ")}`
  );
}

const app = new cdk.App();

const domainName = stage === "prd" ? "service.io" : `${stage}.service.io`;

new InfraStack(app, `service-presentation`, {
  crossRegionReferences: true,
  stackName: `service-presentation`,
  env: environments[stage],
  stage,
  domainName,
});
