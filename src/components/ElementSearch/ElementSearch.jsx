import React from 'react';
import styles from './ElementSearch.module.scss';
import clsx from 'clsx';
import SearchIcon from '@mui/icons-material/Search';
import {Button} from '../../assets/styles/globalStyles';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { setDisplayOverlay } from '../../redux';
const ElementSearch = () => {
  const dispath = useDispatch();
  const handleClose = ()=>{
      dispath(setDisplayOverlay(false));
  }
  return (
    <div
    onClick={(e)=>{
        e.stopPropagation();
    }}
    className={clsx(styles.searchWrap)} >
        <div className={clsx(styles.itemSearch)} >
            <p>WHERE ARE LOOKING FOR?</p>
            <div className={clsx(styles.inputSearch)}>
                <input type='text' placeholder='Enter your keywords...' />
                <Button className={clsx(styles.btnSearch)} ><SearchIcon/></Button>
            </div>
        </div>
        <Button 
        onClick={handleClose}
        className='btn-close' ><CloseIcon/></Button>
    </div>
  )
}

export default ElementSearch
