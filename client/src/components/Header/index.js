import React from 'react';
import Nav from '../Nav';

function Header(props) {

const { setOtherSelected, otherSelected} = props

  return (
    <header>
      <div className='headerContent'>
        <h1 className='title'>Inspired Travels</h1>
        <p className='underTitle'>Let us help you a book for your travels!</p>
      </div>
      <Nav
      setOtherSelected={setOtherSelected}
      otherSelected={otherSelected}
      ></Nav>
    </header>
  )
}

export default Header;