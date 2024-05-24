export const assertEnv = (
  name: string,
  defaultValue: string | undefined = undefined
): string => {
  const value = process.env[name] ?? defaultValue;
  if (value === undefined) {
    throw new Error(`Missing env: ${name}`);
  }
  return value;
};

export const config = {
  get dynamoDbTableName(): string {
    return assertEnv('DYNAMODB_TABLE_NAME');
  },
  get timestreamDatabaseName(): string {
    return assertEnv('TIMESTREAM_DATABASE_NAME');
  },
  get timestreamTableName(): string {
    return assertEnv('TIMESTREAM_TABLE_NAME');
  },
};
