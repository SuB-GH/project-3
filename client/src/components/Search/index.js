import React, { useState } from 'react';

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

      const items = await response.json()
      console.log(items);


      const bookData = items.docs.map((book) => ({
        bookId: book.key,
        authors: book.author_name || ['No author to display'],
        title: book.title,
        isbn: book.isbn && book.isbn[0]
      })).filter((book) => {
        if (book.isbn !== undefined) {
          return true
        } else {
          return false
        }
      })

      setSearchedBooks(bookData);
      console.log(bookData)
    } catch (err) {
      console.error(err);
    }

  };


  const newTab = (book) => {
    window.open(`https://openlibrary.org/b/isbn/9780385533225`, '_blank').focus();
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark search-container'>
        <Container>
          <h1 className='container-title'>Search Your Destination!</h1>
          <Form onSubmit={handleFormSubmit} className='search-section'>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a book'
                  id='form-textbox'
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


      <CardColumns className='book-container'>
        {searchedBooks.map((book) => {
          return (
            <Card key={book.bookId} border='dark'>
              <Card.Img src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt={`The cover for ${book.title}`} variant='top' />
              <Card.Body>
                <Card.Title onclick={newTab()}>{book.title}</Card.Title>
                <p className='small'>{book.authors[0]}</p>
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