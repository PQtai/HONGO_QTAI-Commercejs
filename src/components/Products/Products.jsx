import {Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { loadingSelector } from '../../redux';
import Product from './Product'
import clsx from 'clsx';
import styles from './Products.module.scss';
import Loading from '../Loading/Loading';
const Products = ({currentProducts}) => {
  const loading = useSelector(loadingSelector);
  console.log(currentProducts);
  return (
    <div className={clsx(styles.products)} >
      <Grid container spacing={2} >
        {loading?
          ([1 , 2 , 3 , 4 , 5].map((item, index) => (
                <Loading key={index} />
            )))
          :
          currentProducts.length?
          currentProducts.map((product) => (
            <Product key={product.id} product={product}/>
          ))
          :
          <div className={clsx(styles.noMatchSearch)} >
            <h2>No products were found matching your selection.</h2>
          </div>
      }
      </Grid>
    </div>
  )
}

export default Products
