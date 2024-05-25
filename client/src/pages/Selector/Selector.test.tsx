import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Selector } from './Selector.page';

describe('Selector', () => {
  it('renders', () => {
    render(
      <MantineProvider>
        <Selector />
      </MantineProvider>
    );

    expect(screen.getByText('Fetch policy')).toBeInTheDocument();
  });
});
