import {
  ApolloServer,
  ApolloServerPlugin,
  GraphQLRequestContext,
} from '@apollo/server';
import { typeDefs } from './__generated__/graphql';
import { resolvers } from './resolvers';
import { ApplicationContext, logger } from './utils/applicationContext';

const loggingPlugin: ApolloServerPlugin<ServerContext> = {
  async requestDidStart(requestContext: GraphQLRequestContext<ServerContext>) {
    logger.info({
      message: 'request started',
      query: requestContext.request.query,
      variables: requestContext.request.variables,
    });
  },
};

export interface ServerContext {
  applicationContext: ApplicationContext;
}

export const server = new ApolloServer<ServerContext>({
  typeDefs,
  resolvers,
  plugins: [loggingPlugin],
});
