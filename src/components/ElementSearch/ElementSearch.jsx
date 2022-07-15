import React, { useRef } from 'react';
import styles from './ElementSearch.module.scss';
import clsx from 'clsx';
import SearchIcon from '@mui/icons-material/Search';
import {Button} from '../../assets/styles/globalStyles';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { search_parametersSelector, setDisplayOverlay, setItemPropOverlay, setPostType, setResulesSearch, setValueSearch } from '../../redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ElementSearch = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const elementInput = useRef();
  const search_parameters = useSelector(search_parametersSelector);
  const {value_search , post_type} = search_parameters;
  const handleClose = ()=>{
      dispath(setDisplayOverlay(false));
  }
  const handleKeyDown = (e)=>{
    if(e.key === 'Enter' && e.target.value){
        dispath(setResulesSearch(value_search));
        dispath(setDisplayOverlay(false));
        dispath(setItemPropOverlay(<></>));
        navigate(`/shop/search=${value_search}&post_type=${post_type}`);
    }
  };
  const handleButtonSearch = () => {
      dispath(setDisplayOverlay(false));
      dispath(setItemPropOverlay(<></>));
      navigate(`/shop/search=${value_search}&post_type=${post_type}`);
  };
  const handleOnChange = (e)=>{
    dispath(setValueSearch(e.target.value));
  };
  return (
    <div
    onClick={(e)=>{
        e.stopPropagation();
    }}
    className={clsx(styles.searchWrap)} >
        <div className={clsx(styles.itemSearch)} >
            <p>WHERE ARE LOOKING FOR?</p>
            <div className={clsx(styles.inputSearch)}>
                <input 
                ref={elementInput}
                autoFocus
                onKeyDown={(e)=>{
                  if(e.target.value === ''){
                    dispath(setValueSearch(e.target.value));
                  }
                  handleKeyDown(e);
                }}
                onFocus={(e)=>{
                  dispath(setValueSearch(e.target.value));
                  dispath(setPostType('products'));
                }}
                onChange={handleOnChange}
                type='text' placeholder='Enter your keywords...' />
                <Button 
                onClick={handleButtonSearch}
                className={clsx(styles.btnSearch)} ><SearchIcon/></Button>
            </div>
        </div>
        <Button 
        onClick={handleClose}
        className='btn-close' ><CloseIcon/></Button>
    </div>
  )
}

export default ElementSearch
