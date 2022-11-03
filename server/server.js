const express = require('express');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3002;
// create a new Apollo server and pass in our schema data. here, we provide the type definitions and resolvers so they know what our API looks like and how it resolves requests
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
await server.start();
// integrate our Apollo server with the Express application as middleware. (This will create a special /graphql endpoint for the Express.js server that will serve as the main endpoint for accessing the entire API.)
server.applyMiddleware({ app });

db.once('open', () => {
  app.listen(process.env.PORT || 5000)
  

  })
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);