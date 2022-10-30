import React from 'react'


function Search() {
  return (
    <div className='search-container'>
      <div className='search-section'>
        <label htmlFor="name">What is your Destination?</label>
        <input name="name" className='location' />
      </div>
      <div className='search-section'>
        <div className='search-choices'>
          <input type="radio" name="genre" value="Fiction" />
          <label for="genre">Fiction</label>
          <input type="radio" name="genre" value="Fiction" />
          <label for="genre">Non-Fiction</label>
        </div>
      </div>
      <button data-testid="button" type="submit" className='submit'>Find Books!</button>
    </div>
  )
}


export default Search