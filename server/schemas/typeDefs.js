const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Contact {
    name: String!
    email: String!
    message: String!
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
  
`;

module.exports = typeDefs;
