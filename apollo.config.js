module.exports = {
  client: {
    service: {
      name: "service",
      localSchemaFile: "./graphql/schema.graphql",
    },
    includes: ["./client/src/**/*.graphql"],
  },
};
