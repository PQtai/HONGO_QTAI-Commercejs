import React from 'react'
import Footer from '../../Footer/Footer';
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
        <Footer/>
    </div>
  )
}

export default SearchLayout;
