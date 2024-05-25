import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import { App } from './App';

console.log(
  'VITE_REACT_APP_GRAPHQL_API',
  import.meta.env.VITE_REACT_APP_GRAPHQL_URI
);

const client = new ApolloClient({
  uri: import.meta.env.VITE_REACT_APP_GRAPHQL_URI as string,
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
