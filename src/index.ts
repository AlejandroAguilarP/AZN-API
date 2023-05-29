import { ApolloServer } from "@apollo/server";
import axios from "axios";
import { startStandaloneServer } from "@apollo/server/standalone";

// Definir el esquema GraphQL
const typeDefs = `#graphql
  type Query {
    getKeanuImage(width: Int!, height: Int!, options: String): String
  }
`;

// Resolver para la consulta getKeanuImage
const resolvers = {
  Query: {
    getKeanuImage: async (_, { width, height, options }) => {
      try {
        const url = `https://placekeanu.com/${width}/${height}/${
          options || ""
        }`;
        const response = await axios.get(url, { responseType: "blob" });
        return response.data;
      } catch (error) {
        throw new Error("Error getting an Image");
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
