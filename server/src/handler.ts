import {
  handlers,
  startServerAndCreateLambdaHandler,
} from '@as-integrations/aws-lambda';
import { server } from './server';
import { applicationContext } from './utils/applicationContext';

export const handler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
  {
    context: async () => {
      return {
        applicationContext: applicationContext,
      };
    },
  }
);
