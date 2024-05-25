import { Resolvers } from './__generated__/graphql';

export const resolvers: Resolvers = {
  Query: {
    time: async () => {
      return {
        id: '1',
        time1: new Date().toISOString(),
        time2: new Date().toISOString(),
      };
    },
  },
};
