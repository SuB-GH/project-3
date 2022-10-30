import React, { useState } from 'react';
import Contact from '../Contact';

function Nav(props) {

  const [navItems] = useState([
    { name: 'About' },
    { name: 'Contact' },
    { name: 'Books' },
    { name: 'Page' }
  ]);

  const { setOtherSelected, otherSelected } = props

  const [currentNavItem, setCurrentNavItem] = useState(navItems[0])

  return (
    <nav>
      <ul>
        {navItems.map((category) => (
          <li className={`${currentNavItem.name === category.name && 'active'}`} key={category.name}>
            <span onClick={() => {
              setCurrentNavItem(category)
              setOtherSelected(category.name)
            }}>
              {category.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;