import React from 'react';
import Nav from '../Nav';

function Header(props) {

  const { setOtherSelected, otherSelected } = props

  return (
    <header>
        <div className='title-container'>
          <h1 className='title'>Inspired Travels</h1>
          <h3 className='under-title'>Let us help you find a book for your travels!</h3>
        </div>
        <Nav
          setOtherSelected={setOtherSelected}
          otherSelected={otherSelected}
        ></Nav>
    </header>

  )
}

export default Header;