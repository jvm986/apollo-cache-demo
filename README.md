# Apollo Cache Demo

```bash
npm install:all
npm start:all
```

This repository is intended to demonstrate an issue with Apollo Cache where if a query intended to be cached without an `id` all queries of that type in the cache will be refetched.
https://github.com/jvm986/apollo-cache-demo/assets/20093619/e2e85f5f-c1f4-4e17-aa1e-9518d346f1ef

This is unrelated to the issue which will raise a warning in a similar situation. Shown here.
https://github.com/jvm986/apollo-cache-demo/assets/20093619/e0624d36-b0a4-48a0-9d79-735c07acd929

