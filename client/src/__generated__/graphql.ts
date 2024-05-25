/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  time: TheTime;
};

export type TheTime = {
  __typename?: 'TheTime';
  id: Scalars['ID']['output'];
  time1: Scalars['String']['output'];
  time2: Scalars['String']['output'];
};

export type Time1And2WithIdQueryVariables = Exact<{ [key: string]: never; }>;


export type Time1And2WithIdQuery = { __typename?: 'Query', time: { __typename?: 'TheTime', id: string, time1: string, time2: string } };

export type Time1And2WithoutIdQueryVariables = Exact<{ [key: string]: never; }>;


export type Time1And2WithoutIdQuery = { __typename?: 'Query', time: { __typename?: 'TheTime', time1: string, time2: string } };

export type Time1WithIdQueryVariables = Exact<{ [key: string]: never; }>;


export type Time1WithIdQuery = { __typename?: 'Query', time: { __typename?: 'TheTime', id: string, time1: string } };

export type Time1WithoutIdQueryVariables = Exact<{ [key: string]: never; }>;


export type Time1WithoutIdQuery = { __typename?: 'Query', time: { __typename?: 'TheTime', time1: string } };

export type Time2WithIdQueryVariables = Exact<{ [key: string]: never; }>;


export type Time2WithIdQuery = { __typename?: 'Query', time: { __typename?: 'TheTime', id: string, time2: string } };

export type Time2WithoutIdQueryVariables = Exact<{ [key: string]: never; }>;


export type Time2WithoutIdQuery = { __typename?: 'Query', time: { __typename?: 'TheTime', time2: string } };


export const Time1And2WithIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Time1And2WithId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"time1"}},{"kind":"Field","name":{"kind":"Name","value":"time2"}}]}}]}}]} as unknown as DocumentNode<Time1And2WithIdQuery, Time1And2WithIdQueryVariables>;
export const Time1And2WithoutIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Time1And2WithoutId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time1"}},{"kind":"Field","name":{"kind":"Name","value":"time2"}}]}}]}}]} as unknown as DocumentNode<Time1And2WithoutIdQuery, Time1And2WithoutIdQueryVariables>;
export const Time1WithIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Time1WithId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"time1"}}]}}]}}]} as unknown as DocumentNode<Time1WithIdQuery, Time1WithIdQueryVariables>;
export const Time1WithoutIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Time1WithoutId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time1"}}]}}]}}]} as unknown as DocumentNode<Time1WithoutIdQuery, Time1WithoutIdQueryVariables>;
export const Time2WithIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Time2WithId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"time2"}}]}}]}}]} as unknown as DocumentNode<Time2WithIdQuery, Time2WithIdQueryVariables>;
export const Time2WithoutIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Time2WithoutId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time2"}}]}}]}}]} as unknown as DocumentNode<Time2WithoutIdQuery, Time2WithoutIdQueryVariables>;