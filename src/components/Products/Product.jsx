import { Grid } from '@mui/material'
import React from 'react'
const Product = ({product}) => {

  return (
    <Grid item md={3} sm={6} xs={12} >
        <img alt='img product' src={product.image.url} ></img>
        <h4>{product.name}</h4>
        <p>{product.price.formatted_with_code}</p>
    </Grid>
  )
}

export default Product
