import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;