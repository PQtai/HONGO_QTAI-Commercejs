import clsx from 'clsx'
import React from 'react'
import styles from './SidebarLayout.module.scss'
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import { setFilterWithPriceAsc, setFilterWithPriceDesc, setPostType } from '../../../redux';
import { useNavigate } from 'react-router-dom';
const FilByPrice = ({post_type}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleActive = (e) => {
    if(e.target.classList.contains(clsx(styles.active))){
      e.target.classList.remove(clsx(styles.active));
    }else{
      e.target.classList.add(clsx(styles.active));
    }
  }
  const handleFilterByPrice = (optionPrice)=>{
    if(optionPrice === 'desc'){
      dispatch(setFilterWithPriceDesc(optionPrice));
      navigate(`/HONGO_QTAI-Commercejs/shop/search=${optionPrice}&post_type=${post_type}`);
    }else if(optionPrice === 'asc'){
      dispatch(setFilterWithPriceAsc(optionPrice));
      navigate(`/HONGO_QTAI-Commercejs/shop/search=${optionPrice}&post_type=${post_type}`);
    }
  }
  return (
    <div className={clsx(styles.filByPrice)} >
      <p>Filter by price</p>
      <ul className={clsx(styles.listOptions)} >
        <li 
        onMouseDown={()=>{
          dispatch(setPostType('price'));
        }}
        onClick={(e)=>{
          handleActive(e);
          handleFilterByPrice('asc')
        }} className={clsx(styles.itemOption)} >
          <span>ASC</span>
          <CheckIcon/>
        </li>
        <li 
        onMouseDown={()=>{
          dispatch(setPostType('price'));
        }}
        onClick={(e)=>{
          handleActive(e);
          handleFilterByPrice('desc');
        }} className={clsx(styles.itemOption)} >
          <span>DESC</span>
          <CheckIcon/>
        </li>       
      </ul>
    </div>
  )
}

export default FilByPrice
