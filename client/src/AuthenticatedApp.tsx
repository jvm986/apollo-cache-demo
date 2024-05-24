import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { App as BaseApp } from './App';

export const App = withAuthenticator(BaseApp, {
  hideSignUp: true,
});
