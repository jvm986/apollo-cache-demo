import * as Types from '../../__generated__/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
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

export type Time1And2WithIdQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type Time1And2WithIdQuery = { __typename?: 'Query', time: { __typename?: 'TheTime', id: string, time1: string, time2: string } };

export type Time1And2WithoutIdQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type Time1And2WithoutIdQuery = { __typename?: 'Query', time: { __typename?: 'TheTime', time1: string, time2: string } };

export type Time1WithIdQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type Time1WithIdQuery = { __typename?: 'Query', time: { __typename?: 'TheTime', id: string, time1: string } };

export type Time1WithoutIdQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type Time1WithoutIdQuery = { __typename?: 'Query', time: { __typename?: 'TheTime', time1: string } };

export type Time2WithIdQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type Time2WithIdQuery = { __typename?: 'Query', time: { __typename?: 'TheTime', id: string, time2: string } };

export type Time2WithoutIdQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type Time2WithoutIdQuery = { __typename?: 'Query', time: { __typename?: 'TheTime', time2: string } };


export const Time1And2WithIdDocument = gql`
    query Time1And2WithId {
  time {
    id
    time1
    time2
  }
}
    `;

/**
 * __useTime1And2WithIdQuery__
 *
 * To run a query within a React component, call `useTime1And2WithIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTime1And2WithIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTime1And2WithIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useTime1And2WithIdQuery(baseOptions?: Apollo.QueryHookOptions<Time1And2WithIdQuery, Time1And2WithIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Time1And2WithIdQuery, Time1And2WithIdQueryVariables>(Time1And2WithIdDocument, options);
      }
export function useTime1And2WithIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Time1And2WithIdQuery, Time1And2WithIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Time1And2WithIdQuery, Time1And2WithIdQueryVariables>(Time1And2WithIdDocument, options);
        }
export function useTime1And2WithIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Time1And2WithIdQuery, Time1And2WithIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Time1And2WithIdQuery, Time1And2WithIdQueryVariables>(Time1And2WithIdDocument, options);
        }
export type Time1And2WithIdQueryHookResult = ReturnType<typeof useTime1And2WithIdQuery>;
export type Time1And2WithIdLazyQueryHookResult = ReturnType<typeof useTime1And2WithIdLazyQuery>;
export type Time1And2WithIdSuspenseQueryHookResult = ReturnType<typeof useTime1And2WithIdSuspenseQuery>;
export type Time1And2WithIdQueryResult = Apollo.QueryResult<Time1And2WithIdQuery, Time1And2WithIdQueryVariables>;
export const Time1And2WithoutIdDocument = gql`
    query Time1And2WithoutId {
  time {
    time1
    time2
  }
}
    `;

/**
 * __useTime1And2WithoutIdQuery__
 *
 * To run a query within a React component, call `useTime1And2WithoutIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTime1And2WithoutIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTime1And2WithoutIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useTime1And2WithoutIdQuery(baseOptions?: Apollo.QueryHookOptions<Time1And2WithoutIdQuery, Time1And2WithoutIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Time1And2WithoutIdQuery, Time1And2WithoutIdQueryVariables>(Time1And2WithoutIdDocument, options);
      }
export function useTime1And2WithoutIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Time1And2WithoutIdQuery, Time1And2WithoutIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Time1And2WithoutIdQuery, Time1And2WithoutIdQueryVariables>(Time1And2WithoutIdDocument, options);
        }
export function useTime1And2WithoutIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Time1And2WithoutIdQuery, Time1And2WithoutIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Time1And2WithoutIdQuery, Time1And2WithoutIdQueryVariables>(Time1And2WithoutIdDocument, options);
        }
export type Time1And2WithoutIdQueryHookResult = ReturnType<typeof useTime1And2WithoutIdQuery>;
export type Time1And2WithoutIdLazyQueryHookResult = ReturnType<typeof useTime1And2WithoutIdLazyQuery>;
export type Time1And2WithoutIdSuspenseQueryHookResult = ReturnType<typeof useTime1And2WithoutIdSuspenseQuery>;
export type Time1And2WithoutIdQueryResult = Apollo.QueryResult<Time1And2WithoutIdQuery, Time1And2WithoutIdQueryVariables>;
export const Time1WithIdDocument = gql`
    query Time1WithId {
  time {
    id
    time1
  }
}
    `;

/**
 * __useTime1WithIdQuery__
 *
 * To run a query within a React component, call `useTime1WithIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTime1WithIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTime1WithIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useTime1WithIdQuery(baseOptions?: Apollo.QueryHookOptions<Time1WithIdQuery, Time1WithIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Time1WithIdQuery, Time1WithIdQueryVariables>(Time1WithIdDocument, options);
      }
export function useTime1WithIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Time1WithIdQuery, Time1WithIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Time1WithIdQuery, Time1WithIdQueryVariables>(Time1WithIdDocument, options);
        }
export function useTime1WithIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Time1WithIdQuery, Time1WithIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Time1WithIdQuery, Time1WithIdQueryVariables>(Time1WithIdDocument, options);
        }
export type Time1WithIdQueryHookResult = ReturnType<typeof useTime1WithIdQuery>;
export type Time1WithIdLazyQueryHookResult = ReturnType<typeof useTime1WithIdLazyQuery>;
export type Time1WithIdSuspenseQueryHookResult = ReturnType<typeof useTime1WithIdSuspenseQuery>;
export type Time1WithIdQueryResult = Apollo.QueryResult<Time1WithIdQuery, Time1WithIdQueryVariables>;
export const Time1WithoutIdDocument = gql`
    query Time1WithoutId {
  time {
    time1
  }
}
    `;

/**
 * __useTime1WithoutIdQuery__
 *
 * To run a query within a React component, call `useTime1WithoutIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTime1WithoutIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTime1WithoutIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useTime1WithoutIdQuery(baseOptions?: Apollo.QueryHookOptions<Time1WithoutIdQuery, Time1WithoutIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Time1WithoutIdQuery, Time1WithoutIdQueryVariables>(Time1WithoutIdDocument, options);
      }
export function useTime1WithoutIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Time1WithoutIdQuery, Time1WithoutIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Time1WithoutIdQuery, Time1WithoutIdQueryVariables>(Time1WithoutIdDocument, options);
        }
export function useTime1WithoutIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Time1WithoutIdQuery, Time1WithoutIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Time1WithoutIdQuery, Time1WithoutIdQueryVariables>(Time1WithoutIdDocument, options);
        }
export type Time1WithoutIdQueryHookResult = ReturnType<typeof useTime1WithoutIdQuery>;
export type Time1WithoutIdLazyQueryHookResult = ReturnType<typeof useTime1WithoutIdLazyQuery>;
export type Time1WithoutIdSuspenseQueryHookResult = ReturnType<typeof useTime1WithoutIdSuspenseQuery>;
export type Time1WithoutIdQueryResult = Apollo.QueryResult<Time1WithoutIdQuery, Time1WithoutIdQueryVariables>;
export const Time2WithIdDocument = gql`
    query Time2WithId {
  time {
    id
    time2
  }
}
    `;

/**
 * __useTime2WithIdQuery__
 *
 * To run a query within a React component, call `useTime2WithIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTime2WithIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTime2WithIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useTime2WithIdQuery(baseOptions?: Apollo.QueryHookOptions<Time2WithIdQuery, Time2WithIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Time2WithIdQuery, Time2WithIdQueryVariables>(Time2WithIdDocument, options);
      }
export function useTime2WithIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Time2WithIdQuery, Time2WithIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Time2WithIdQuery, Time2WithIdQueryVariables>(Time2WithIdDocument, options);
        }
export function useTime2WithIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Time2WithIdQuery, Time2WithIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Time2WithIdQuery, Time2WithIdQueryVariables>(Time2WithIdDocument, options);
        }
export type Time2WithIdQueryHookResult = ReturnType<typeof useTime2WithIdQuery>;
export type Time2WithIdLazyQueryHookResult = ReturnType<typeof useTime2WithIdLazyQuery>;
export type Time2WithIdSuspenseQueryHookResult = ReturnType<typeof useTime2WithIdSuspenseQuery>;
export type Time2WithIdQueryResult = Apollo.QueryResult<Time2WithIdQuery, Time2WithIdQueryVariables>;
export const Time2WithoutIdDocument = gql`
    query Time2WithoutId {
  time {
    time2
  }
}
    `;

/**
 * __useTime2WithoutIdQuery__
 *
 * To run a query within a React component, call `useTime2WithoutIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTime2WithoutIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTime2WithoutIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useTime2WithoutIdQuery(baseOptions?: Apollo.QueryHookOptions<Time2WithoutIdQuery, Time2WithoutIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Time2WithoutIdQuery, Time2WithoutIdQueryVariables>(Time2WithoutIdDocument, options);
      }
export function useTime2WithoutIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Time2WithoutIdQuery, Time2WithoutIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Time2WithoutIdQuery, Time2WithoutIdQueryVariables>(Time2WithoutIdDocument, options);
        }
export function useTime2WithoutIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Time2WithoutIdQuery, Time2WithoutIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Time2WithoutIdQuery, Time2WithoutIdQueryVariables>(Time2WithoutIdDocument, options);
        }
export type Time2WithoutIdQueryHookResult = ReturnType<typeof useTime2WithoutIdQuery>;
export type Time2WithoutIdLazyQueryHookResult = ReturnType<typeof useTime2WithoutIdLazyQuery>;
export type Time2WithoutIdSuspenseQueryHookResult = ReturnType<typeof useTime2WithoutIdSuspenseQuery>;
export type Time2WithoutIdQueryResult = Apollo.QueryResult<Time2WithoutIdQuery, Time2WithoutIdQueryVariables>;