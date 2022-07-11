import clsx from 'clsx';
import React from 'react'
import { useSelector } from 'react-redux';
import { categoryProductsSelector } from '../../../redux';
import styles from './SidebarLayout.module.scss'
const Categories = () => {
  // category list
  const categoryProducts = useSelector(categoryProductsSelector);
  console.log(categoryProducts);
  return (
    <div className={clsx(styles.categories)} >
      <p>Filter by category</p>
      <ul className={clsx(styles.listsCategories)} >
        {categoryProducts.map((itemCategory ,index)=>{
          return (
            <li key={index} >{itemCategory.name}</li>
          )
        })}
            <li >All products</li>
      </ul>
    </div>
  )
}

export default Categories
