import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Divider,
  Group,
  Menu,
  NavLink,
  Text,
  rem,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconChevronRight,
  IconHome2,
  IconLogout,
  IconMoon,
  IconSun,
  IconUserCircle,
} from '@tabler/icons-react';
import { fetchUserAttributes, signOut } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  email?: string;
  given_name?: string;
  family_name?: string;
}

export const Navbar = ({ children }: React.PropsWithChildren<object>) => {
  const [mobileOpened, { toggle: toggleMobile, close: closeMobile }] =
    useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [currentUser, setCurrentUser] = useState<User>();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut().catch((error) => {
      console.error('Error signing out: ', error);
    });
  };

  const handleNavigate = (path: string) => () => {
    navigate(path);
    closeMobile();
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await fetchUserAttributes();
        setCurrentUser(user);
      } catch (e) {
        const error = e as Error;
        console.error('Error fetching current user:', { error });
      }
    };

    fetchCurrentUser().catch((error) => {
      console.error('Error fetching current user:', error);
    });
  }, []);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      styles={{
        main: { backgroundColor: 'var(--mantine-color-gray-light-hover)' },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <Group h="100%" px="md" justify="space-between" style={{ flex: 1 }}>
            <Text
              size="xl"
              onClick={handleNavigate('/')}
              style={{ cursor: 'pointer' }}
            >
              MyService
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
              <Burger
                opened={mobileOpened}
                onClick={toggleMobile}
                hiddenFrom="sm"
                size="sm"
              />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section grow>
          <NavLink
            href="#required-for-focus"
            label="Home"
            leftSection={
              <ActionIcon variant="light">
                <IconHome2 size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            onClick={handleNavigate('/')}
          />
        </AppShell.Section>
        <AppShell.Section>
          {currentUser && (
            <>
              <Divider my="md" />
              <Menu
                shadow="md"
                width={200}
                position={mobileOpened ? 'top-end' : 'right-end'}
                withArrow
              >
                <Menu.Target>
                  <NavLink
                    href="#required-for-focus"
                    label={`${currentUser.given_name} ${currentUser.family_name}`}
                    description={currentUser.email}
                    leftSection={
                      <Avatar
                        color="cyan"
                        radius="xl"
                        ta="right"
                        style={{ cursor: 'pointer' }}
                      />
                    }
                    rightSection={
                      <IconChevronRight
                        size="0.8rem"
                        stroke={1.5}
                        className="mantine-rotate-rtl"
                      />
                    }
                  />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>{currentUser.email}</Menu.Label>
                  <Menu.Item
                    leftSection={
                      <IconUserCircle
                        style={{ width: rem(14), height: rem(14) }}
                      />
                    }
                    onClick={handleNavigate('/profile')}
                  >
                    Profile
                  </Menu.Item>
                  <Menu.Item
                    leftSection={
                      <IconLogout style={{ width: rem(14), height: rem(14) }} />
                    }
                    onClick={handleSignOut}
                  >
                    Log Out
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </>
          )}
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
