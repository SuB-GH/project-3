import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
  return (
    <header>
      <h2>
        <a href='/'>Inspired Travels</a>
      </h2>
      <nav>
        <ul>
          <li >
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            <a href='#donate'>Donate</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav