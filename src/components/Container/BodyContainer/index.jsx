import React, { useEffect, useRef, useState } from 'react'
import Intro from './Intro'
import clsx from 'clsx';
import styles from '../Container.module.scss';
import { useSelector } from 'react-redux';
import { categoryProductsSelector, loadingSelector, productsSelector } from '../../../redux';
import Suggestions from './Suggestions';
import Blog from './Blog';
import { Grid } from '@mui/material';
import Product from '../../Products/Product';
import Loading from '../../Loading/Loading';
import { useCallback } from 'react';


const BodyContainer = () => {
  const advice = useRef({
    name : 'Great Selection',
    description : 'Follow the most popular trends and get exclusive items from hongo shop'
  })
  const Latest = useRef({
    name : 'Latest Blogs',
    description : 'Way is there to get clothing you’re sure to love than by making it your know'
  })
  const [productsNotable , setProductsNotable] = useState();
  const loading = useSelector(loadingSelector);
  const products = useSelector(productsSelector);
  const categoryProducts = useSelector(categoryProductsSelector);
  console.log(products);
  console.log(categoryProducts);

  const getProductsNotable = useCallback(()=> {
    const findProductsNotable = products.filter((product , index) =>{
      return product.sort_order >= 150;
    })
    setProductsNotable(findProductsNotable);
  },[products])
  useEffect(()=>{
    getProductsNotable();
  },[products , getProductsNotable]);

  return (
    <div className={clsx(styles.bodyContainer)} >
      <Intro props={advice}/>
      <div className={clsx(styles.productsNotable)} >
        <Grid container spacing={2} >
          {loading?<Loading/>:
          productsNotable?.map((product) => (
              <Product  
              key={product.id} 
              propsStyles={styles}
              product={product}/>
          ))}
        </Grid>
      </div>
      <Suggestions/>
      <Intro props={Latest}/>
      <Blog/>
    </div>
  )
}

export default BodyContainer
