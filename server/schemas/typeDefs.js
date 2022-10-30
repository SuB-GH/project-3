const { gql } = require('apollo-server-express');

const typeDefs = gql`
<<<<<<< HEAD
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  input InputBook {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: InputBook!): User
    removeBook(bookId: ID!): User
=======


type Book {
  title: String
}

  type Query {
    books {
      title
    }
>>>>>>> f8403a544e4be845ba84fe1fee3812e1fe685fe5
  }
  
`;

<<<<<<< HEAD
module.exports = typeDefs;
=======
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
>>>>>>> f8403a544e4be845ba84fe1fee3812e1fe685fe5
