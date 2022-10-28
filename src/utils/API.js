
// this creates an API search to Open Library
export const searchOpenLibrary = (query) => {
    return fetch(`http://openlibrary.org/search.json?q=${query}`);
  };