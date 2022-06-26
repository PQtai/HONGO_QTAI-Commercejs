import React from 'react'
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { useSelector } from 'react-redux';
import { displayOverlaySelector, itemPropOverlaySelector } from '../../../redux';
import Overlay from '../../Overlay/Overlay'
const DefaultLayout = ({children}) => {
  const displayOverlay = useSelector(displayOverlaySelector);
  const itemPropOverlay = useSelector(itemPropOverlaySelector)
  return (
    <div>
        <Navbar/>
        <div className='container' >{children}</div>
        <Footer/>
        {displayOverlay && <Overlay component={itemPropOverlay} />}
    </div>
  )
}

export default DefaultLayout;
