import { MantineProvider } from '@mantine/core';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { Navbar } from './Navbar';

vi.mock('aws-amplify/auth', () => ({
  fetchUserAttributes: () =>
    Promise.resolve({
      email: 'test@example.com',
      given_name: 'Test',
      family_name: 'User',
    }),
  signOut: () => Promise.resolve(),
}));

describe('Navbar', () => {
  it('renders menu items after interaction', async () => {
    render(
      <MemoryRouter>
        <MantineProvider>
          <Navbar />
        </MantineProvider>
      </MemoryRouter>
    );

    await userEvent.click(await screen.findByText('Test User'));

    await waitFor(() => {
      expect(screen.getByText('Profile')).toBeInTheDocument();
      expect(screen.getByText('Log Out')).toBeInTheDocument();
    });
  });
});
