import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import { assert, beforeEach, describe, expect, it } from 'vitest';
import { typeDefs } from './__generated__/graphql';
import { resolvers } from './resolvers';

interface ContextValue {
  applicationContext: unknown;
}

const mockContext: ContextValue = {
  applicationContext: {},
};

describe('resolvers', () => {
  beforeEach(() => {});

  describe('Query', () => {
    it('returns hello world from home', async () => {
      const testServer = new ApolloServer<ContextValue>({
        typeDefs,
        resolvers,
      });
      const response = await testServer.executeOperation(
        {
          query: gql`
            query {
              home
            }
          `,
        },
        {
          contextValue: mockContext,
        }
      );

      assert(response.body.kind === 'single');
      expect(response.body.singleResult.data.home).toEqual('Hello World!');
    });
  });
});
