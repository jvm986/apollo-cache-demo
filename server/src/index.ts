import { startStandaloneServer } from '@apollo/server/standalone';
import { server } from './server';
import { applicationContext } from './utils/applicationContext';

async function startServer() {
  try {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
      context: async () => {
        return {
          applicationContext: applicationContext,
        };
      },
    });

    console.log(`🚀  Server ready at: ${url}`);
  } catch (error) {
    console.error('Failed to start the server', error);
  }
}

startServer();
