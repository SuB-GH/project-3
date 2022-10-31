import React, { useState, useEffect } from 'react';

import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
function Search() {


    const [searchedBooks, setSearchedBooks] = useState([]);
    const [searchInput, setSearchInput] = useState('');
  
  
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

  
        const bookData = items.docs.map((book) => ({
          bookId: book.key,
          authors: book.author_name || ['No author to display'],
          title: book.title,       
          image: book.cover_i
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

    
    <CardColumns>
          {searchedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? (
                  <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                 
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
  </>




    
  )
}


export default Search