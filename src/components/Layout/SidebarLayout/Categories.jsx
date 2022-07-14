import clsx from 'clsx';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { categoryProductsSelector, setFilterWithCategories, setPostType } from '../../../redux';
import styles from './SidebarLayout.module.scss'
const Categories = ({post_type}) => {
  const navigate = useNavigate();
  
  // category list
  const categoryProducts = useSelector(categoryProductsSelector);
  const dispatch = useDispatch();
  const handleFilterByCategory = (nameCategory)=>{
    dispatch(setFilterWithCategories(nameCategory));
    navigate(`/HONGO_QTAI-Commercejs/shop/search=${nameCategory}&post_type=${post_type}`);
  }
  return (
    <div className={clsx(styles.categories)} >
      <p>Filter by category</p>
      <ul className={clsx(styles.listsCategories)} >
        {categoryProducts.map((itemCategory ,index)=>{
          return (
            <li 
            onMouseDown={()=>{
              dispatch(setPostType('categories'));
            }}
            onClick={()=>{
              handleFilterByCategory(itemCategory.slug);
            }} key={index} >{itemCategory.name}</li>
          )
        })}
            <li 
            onMouseDown={()=>{
              dispatch(setPostType('categories'));
            }}
            onClick={(e)=>{
              handleFilterByCategory('All products');
            }} >All products</li>
      </ul>
    </div>
  )
}

export default React.memo(Categories)
