import React from 'react'
import Navbar from '../../Navbar/Navbar';

const SearchLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className='container dFlex' >
          <div className='Sidebar' >
            sidebar
          </div>
          <div>{children}</div>
        </div>
    </div>
  )
}

export default SearchLayout;
