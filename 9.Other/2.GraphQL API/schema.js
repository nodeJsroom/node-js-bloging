const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return "Hello, World!";
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
