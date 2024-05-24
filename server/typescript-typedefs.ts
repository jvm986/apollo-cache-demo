import { printSchemaWithDirectives } from '@graphql-tools/utils';
import { GraphQLSchema, stripIgnoredCharacters } from 'graphql';

const print = (schema: string) => `
export const typeDefs = \`#graphql\n${schema}\n\`;
`;

export const plugin = (schema: GraphQLSchema) =>
  print(stripIgnoredCharacters(printSchemaWithDirectives(schema)));
