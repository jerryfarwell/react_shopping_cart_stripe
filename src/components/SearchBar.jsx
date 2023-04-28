import React, { useState } from 'react'
import '../assets/stylesheet/SearchBar.css'


function SearchBar() {

  return (
    <div>
        <input type="text"  placeholder='Rechercher...' className='search' onChange={e => setFindItem(e.target.value)} />
    </div>
  )
}

export default SearchBar