// API request to Open Library
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
// export const searchOpenLibrary = (query) => {
//   return fetch(`http://openlibrary.org/search.json?q=${query}`);
// };

import React from 'react';

const { RESTDataSource } = require('apollo-datasource-rest');

class BookAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://openlibrary.org/search.json?q=';
  }
  async getAllBooks(){
    const response = await this.get('books');
    return Array.isArray(response)
    ? response.map(book => this.bookResults(book))
    : {};
  }
  bookResults(book) {
    return {
      subject: String,
    }
  }
}








module.exports = BookAPI;