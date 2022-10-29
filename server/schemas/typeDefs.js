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
    id: ID
    subject: String
  }
`;


// export the typeDefs
module.exports = typeDefs;