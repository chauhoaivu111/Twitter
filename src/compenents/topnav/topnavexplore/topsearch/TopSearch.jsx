

import React from 'react'

import './TopSearch.scss';

const TopSearch = () => {
  return (

    <div className='main_search_explore'>
        <i class='bx bx-search'></i>
        <input type='text' className='main_search_searchs_explore' placeholder='Search Twitter'/>
    </div>
  )
}

export default TopSearch