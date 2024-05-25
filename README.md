# Apollo Cache Demo

```bash
npm install:all
npm start:all
```

This repository is intended to demonstrate an issue with Apollo Cache where if a query intended to be cached without an `id` fires, all queries related to that type in the cache will be refetched.
Here there are three queries, a static query fetching both `time1` and `time2` using the default `cache-first` fetch policy, a query polling for `time1` with the same default fetch policy and query polling for `time2` with the `no-cache` fetch policy set. Initially the value of `time1` is updated in the cache while `time2` is not. However, when the `time1` query is updated to _not_ include the `id` all three queries are being fetched on the polling schedule.
<video src='https://github.com/jvm986/apollo-cache-demo/assets/20093619/78522b89-4d7e-487f-bc1a-61561c922706' />

Another example with only two queries
<video src='https://github.com/jvm986/apollo-cache-demo/assets/20093619/150be230-b9c6-46fe-a91e-c23eebe239df' />

And an example of a similar, but unrelated scenario, which raises a warning - when an item _with_ an `id` is added to the cache where an item _without_ an `id` already exists. Shown here for clarity.
<video src='https://github.com/jvm986/apollo-cache-demo/assets/20093619/09da0b05-0cc9-4d12-a53e-c425df48af0a' />


