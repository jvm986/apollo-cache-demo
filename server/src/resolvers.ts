import { Resolvers } from './__generated__/graphql';

export const resolvers: Resolvers = {
  Query: {
    home: async () => {
      return 'Hello, world!';
    },
  },
};
