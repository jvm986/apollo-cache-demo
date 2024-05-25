/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query Time1And2WithId {\n  time {\n    id\n    time1\n    time2\n  }\n}\n\nquery Time1And2WithoutId {\n  time {\n    time1\n    time2\n  }\n}\n\nquery Time1WithId {\n  time {\n    id\n    time1\n  }\n}\n\nquery Time1WithoutId {\n  time {\n    time1\n  }\n}\n\nquery Time2WithId {\n  time {\n    id\n    time2\n  }\n}\n\nquery Time2WithoutId {\n  time {\n    time2\n  }\n}": types.Time1And2WithIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query Time1And2WithId {\n  time {\n    id\n    time1\n    time2\n  }\n}\n\nquery Time1And2WithoutId {\n  time {\n    time1\n    time2\n  }\n}\n\nquery Time1WithId {\n  time {\n    id\n    time1\n  }\n}\n\nquery Time1WithoutId {\n  time {\n    time1\n  }\n}\n\nquery Time2WithId {\n  time {\n    id\n    time2\n  }\n}\n\nquery Time2WithoutId {\n  time {\n    time2\n  }\n}"): (typeof documents)["query Time1And2WithId {\n  time {\n    id\n    time1\n    time2\n  }\n}\n\nquery Time1And2WithoutId {\n  time {\n    time1\n    time2\n  }\n}\n\nquery Time1WithId {\n  time {\n    id\n    time1\n  }\n}\n\nquery Time1WithoutId {\n  time {\n    time1\n  }\n}\n\nquery Time2WithId {\n  time {\n    id\n    time2\n  }\n}\n\nquery Time2WithoutId {\n  time {\n    time2\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;