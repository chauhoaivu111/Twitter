import React from 'react'

import './TopNavSearch.scss'

const TopNavSearch = () => {
  return (

    <div className='main_search'>
        <i class='bx bx-search'></i>
        <input type='text' className='main_search__searchs' placeholder='Search Twitter'/>
    </div>
  )
}

export default TopNavSearch