import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Amplify } from 'aws-amplify';
import { fetchAuthSession } from 'aws-amplify/auth';
import ReactDOM from 'react-dom/client';
import { App } from './App';

Amplify.configure({
  Auth: {
    Cognito: {
      loginWith: {
        email: true,
      },

      userPoolId: import.meta.env.VITE_REACT_APP_USER_POOL_ID as string,
      userPoolClientId: import.meta.env
        .VITE_REACT_APP_USER_POOL_CLIENT_ID as string,
    },
  },
});

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_REACT_APP_GRAPHQL_URI as string,
});

const authLink = setContext(async (_, { headers }) => {
  try {
    const session = await fetchAuthSession();
    const token = session.tokens?.accessToken.toString();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      } as Record<string, string>,
    };
  } catch (e) {
    const error = e as Error;
    console.error('Error getting the authentication token', {
      error,
    });
    return headers as Record<string, string>;
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
} else {
  console.error('Root element not found');
}
