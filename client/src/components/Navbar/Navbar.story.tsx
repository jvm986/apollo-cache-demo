import { MantineProvider } from '@mantine/core';
import { StoryFn } from '@storybook/react';
import { Navbar } from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
  decorators: [
    (Story: StoryFn) => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    ),
  ],
};

export const Usage = () => <Navbar />;
