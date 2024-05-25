import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { AppRouter } from './Router';
import { theme } from './theme';

export function App() {
  return (
    <MantineProvider theme={theme}>
      <AppRouter />
    </MantineProvider>
  );
}
