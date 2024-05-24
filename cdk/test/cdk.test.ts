import { Template } from "aws-cdk-lib/assertions";
import { App } from "aws-cdk-lib";
import { describe, expect, it } from "vitest";
import { InfraStack } from "../lib/cdk-stack";

describe("InfraStack", () => {
  // Function to create a stack instance
  const createTestStack = () => {
    const app = new App();
    const stack = new InfraStack(app, "test-stack", {
      stage: "dev",
      domainName: "example.com",
    });
    return Template.fromStack(stack);
  };

  it("should create a CloudFront distribution", () => {
    const template = createTestStack();
    template.resourceCountIs("AWS::CloudFront::Distribution", 1);
  });
});
