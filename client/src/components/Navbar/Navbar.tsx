import {
  ActionIcon,
  AppShell,
  Group,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export const Navbar = ({ children }: React.PropsWithChildren<object>) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      header={{ height: 60 }}
      styles={{
        main: { backgroundColor: 'var(--mantine-color-gray-light-hover)' },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Group h="100%" px="md" justify="space-between" style={{ flex: 1 }}>
            <Text size="xl" style={{ cursor: 'pointer' }}>
              Apollo Cache Demo
            </Text>
            <Group>
              {colorScheme === 'dark' ? (
                <ActionIcon
                  onClick={() => {
                    setColorScheme('light');
                  }}
                  variant="default"
                  size="lg"
                >
                  <IconSun />
                </ActionIcon>
              ) : (
                <ActionIcon
                  onClick={() => {
                    setColorScheme('dark');
                  }}
                  variant="default"
                  size="lg"
                >
                  <IconMoon />
                </ActionIcon>
              )}
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
