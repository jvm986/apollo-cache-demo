import { afterEach } from 'vitest';

afterEach(() => {});

process.env.DYNAMODB_TABLE_NAME = 'test-dynamodb-table';
process.env.TIMESTREAM_DATABASE_NAME = 'test-database';
process.env.TIMESTREAM_TABLE_NAME = 'test-time-stream-table';
