import React from 'react';
import Nav from '../Nav';

function Header(props) {

const { setOtherSelected, otherSelected} = props

  return (
    <header>
      <div className='headerContent'>
        <h1 className='title'>Jonathan Thompson</h1>
        <p className='underTitle'>Full Stack Web Developer</p>
      </div>
      <Nav
      setOtherSelected={setOtherSelected}
      otherSelected={otherSelected}
      ></Nav>
    </header>
  )
}

export default Header;