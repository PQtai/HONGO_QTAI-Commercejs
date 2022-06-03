import React from 'react'
import Navbar from '../../Navbar/Navbar';

const DefaultLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className='container' >{children}</div>
    </div>
  )
}

export default DefaultLayout;
