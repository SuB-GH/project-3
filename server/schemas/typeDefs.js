// import GraphQL tagged template function (which are like template literals)
const { gql } = require('apollo-server-express');

// typeDefs define the API endpoint, and also the exact data and parameters that are tied to that endpoint.
// const typeDefs = gql`
//   type Query {
//     helloWisconsin: String
//   }
// `;

const typeDefs = gql`


type Book {
  title: String
}

  type Query {
    books {
      title
    }
  }
  
`;

// type User {
//   _id: ID
//   username: String
//   email: String
//   books: [Book]
// }

// type Query {
//   users: [User]
//   user(username: String!): User
//   books(username: String): [Book]
//   book(_id: ID!): Book
// }


// export the typeDefs
module.exports = typeDefs;