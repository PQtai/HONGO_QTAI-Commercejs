import {Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { productsSelector } from '../../redux';
import Product from './Product'
const Products = () => {
  const products = useSelector(productsSelector);
  return (
    <div>
      <Grid container spacing={2} >
        {products.map((product) => (
            <Product key={product.id} product={product}/>
        ))}
      </Grid>
    </div>
  )
}

export default Products
