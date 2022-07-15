import React, { useEffect } from 'react'
import {Banner  , Container} from '../../components';
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className='home__page'>
      <Banner/>
      <Container/>
    </div>
  )
}

export default HomePage
