import React from 'react'
import { useDispatch } from 'react-redux';
import { setDisplayOverlay } from '../../redux';
import  './Overlay.scss';
const Overlay = ({component}) => {
    const dispatch = useDispatch();
    const handleHideOverlay = ()=>{
        dispatch(setDisplayOverlay(false));
    }
  return (
    <div className='overlay' >
      <div 
      onClick={handleHideOverlay}
      className='modal' >
        {component}
      </div>
    </div>
  )
}

export default Overlay
