import { Logger } from '@aws-lambda-powertools/logger';
import { Tracer } from '@aws-lambda-powertools/tracer';
import { Metrics } from '@aws-lambda-powertools/metrics';

const serviceName = process.env.SERVICE_NAME ?? 'graphql-server';
const logLevel = (process.env.LOG_LEVEL ?? 'info').toLowerCase();

switch (logLevel) {
  case 'debug':
  case 'info':
  case 'warn':
  case 'error':
  case 'silent':
    break;
  default:
    throw new Error(`Invalid log level: ${logLevel}`);
}

export const logger = new Logger({ serviceName, logLevel });
export const tracer = new Tracer({ serviceName });
export const metrics = new Metrics({ serviceName });

export class ApplicationContext {
  constructor() {}
}

export const applicationContext = new ApplicationContext();
