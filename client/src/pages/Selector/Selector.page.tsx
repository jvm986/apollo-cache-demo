/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { WatchQueryFetchPolicy, gql, useQuery } from '@apollo/client';
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Code,
  Grid,
  Group,
  NumberInput,
  Select,
  Switch,
  Text,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface CardProps {
  cardId: string;
  queryId?: boolean;
  queryTime1?: boolean;
  queryTime2?: boolean;
  pollInterval?: number;
  fetchPolicy?: WatchQueryFetchPolicy;
  onRemove?: () => void;
}

export function QueryCard(props: CardProps) {
  const queryString =
    'query Card_' +
    props.cardId +
    '{time{' +
    (props.queryId ? 'id ' : '') +
    (props.queryTime1 ? 'time1 ' : '') +
    (props.queryTime2 ? 'time2 ' : '') +
    '}}';

  const { data } = useQuery(gql(queryString), {
    pollInterval: props.pollInterval,
    fetchPolicy: props.fetchPolicy,
  });

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mb="xs">
        <Text fw={500}>{props.cardId}</Text>

        <ActionIcon
          variant="subtle"
          color="black"
          onClick={props.onRemove}
          style={{ alignSelf: 'end' }}
        >
          <IconX />
        </ActionIcon>
      </Group>

      <Text size="sm" c="dimmed">
        <Code>id: {props.queryId ? 'true' : 'false'}</Code>
        <br />
        <Code>
          pollInterval: {props.pollInterval ? props.pollInterval : 'undefined'}
        </Code>
        <br />
        <Code>
          fetchPolicy: {props.fetchPolicy ? props.fetchPolicy : 'undefined'}
        </Code>
      </Text>
      <Group justify="space-between" mt="md">
        <Badge {...(props.queryTime1 ? { color: 'blue' } : { color: 'gray' })}>
          Time 1
        </Badge>
        <Text fw={500}>{props.queryTime1 ? data?.time.time1 : 'N/A'}</Text>
      </Group>
      <Group justify="space-between" mb="xs">
        <Badge {...(props.queryTime2 ? { color: 'pink' } : { color: 'gray' })}>
          Time 2
        </Badge>
        <Text fw={500}>{props.queryTime2 ? data?.time.time2 : 'N/A'}</Text>
      </Group>
    </Card>
  );
}

export function Selector() {
  const [fetchPolicy, setFetchPolicy] = useState<WatchQueryFetchPolicy>();
  const [pollInterval, setPollInterval] = useState<number>();
  const [id, setId] = useState<boolean>(true);
  const [time1, setTime1] = useState<boolean>(true);
  const [time2, setTime2] = useState<boolean>(true);

  const [cards, setCards] = useLocalStorage<CardProps[]>({
    key: 'cards',
    defaultValue: [],
  });

  const addCard = () => {
    const cardId = uuidv4().split('-')[0];

    setCards((prevCards) => [
      ...prevCards,
      {
        cardId,
        queryId: id,
        queryTime1: time1,
        queryTime2: time2,
        pollInterval: pollInterval ? pollInterval * 1000 : undefined,
        fetchPolicy,
      },
    ]);
  };

  const removeCard = (cardId: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.cardId !== cardId));
  };

  return (
    <>
      <Grid>
        <Grid.Col span={2}>
          <Card>
            <Select
              label="Fetch policy"
              data={[
                'cache-first',
                'cache-and-network',
                'network-only',
                'no-cache',
              ]}
              value={fetchPolicy}
              onChange={(value) => {
                setFetchPolicy(value as WatchQueryFetchPolicy);
              }}
              m={6}
              clearable
            />
            <Switch
              label="id"
              checked={id}
              onChange={() => {
                setId((c) => !c);
              }}
              m={6}
            />
            <Switch
              label="time1"
              checked={time1}
              onChange={() => {
                setTime1((c) => !c);
              }}
              m={6}
            />
            <Switch
              label="time2"
              checked={time2}
              onChange={() => {
                setTime2((c) => !c);
              }}
              m={6}
            />
            <NumberInput
              label="Poll interval (seconds)"
              value={pollInterval}
              onChange={(value) => {
                if (typeof value === 'number' && value > 0) {
                  setPollInterval(value);
                }
                if (value === '') {
                  setPollInterval(undefined);
                }
              }}
              m={6}
            />
            <Button onClick={addCard} fullWidth m={6}>
              Add Query
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={10}>
          <Grid>
            {cards.map((card, index) => (
              <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={index}>
                <QueryCard
                  {...card}
                  onRemove={() => {
                    removeCard(card.cardId);
                  }}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
      </Grid>
    </>
  );
}
