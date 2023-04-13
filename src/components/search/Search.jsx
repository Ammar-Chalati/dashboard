import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

import './search.css';

const Search = () => {
  return (
    <div className='search'>
			<SearchIcon className='searchitem'/>
			<input type="text" placeholder='Search' />
    </div>
  )
}

export default Search
