import React, { useState, useEffect } from 'react';

import { Jumbotron, Container, Col, Form, Button, } from 'react-bootstrap';
function Search() {


    const [searchedBooks, setSearchedBooks] = useState([]);
    const [searchInput, setSearchInput] = useState('');
   // const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());
  
   // const [saveBook, { error }] = useMutation(SAVE_BOOK);
  
    //useEffect(() => {
     // return () => saveBookIds(savedBookIds);
    //});
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      if (!searchInput) {
        return false;
      }
  
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?place=${searchInput}`
        );
  
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
  
        const  items  = await response.json()
        console.log(items);

  
        const bookData = items.map((book) => ({
          bookId: book.key,
          authors: book.author_name || ['No author to display'],
          title: book.title,       
         // image: book.cover_i
        }));
  
        setSearchedBooks(bookData);
        console.log(bookData) 
        setSearchInput('');
      } catch (err) {
        console.error(err);
      }
    };
  
  return (

    <>
    <Jumbotron fluid className='text-light bg-dark'>
      <Container>
        <h1>Search for Books!</h1>
        <Form onSubmit={handleFormSubmit}>
          <Form.Row>
            <Col xs={12} md={8}>
              <Form.Control
                name='searchInput'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type='text'
                size='lg'
                placeholder='Search for a book'
              />
            </Col>
            <Col xs={12} md={4}>
              <Button type='submit' variant='success' size='lg'>
                Submit Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    </Jumbotron>

    <Container>
      <h2>
        {searchedBooks.length
          ? `Viewing ${searchedBooks.length} results:`
          : 'Search for a book to begin'}
      </h2>
    </Container>
  </>




    
  )
}


export default Search