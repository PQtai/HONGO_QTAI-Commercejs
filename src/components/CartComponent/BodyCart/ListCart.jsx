import { Grid } from '@mui/material'
import clsx from 'clsx'
import React from 'react'
import ItemInCart from './ItemInCart'
import styles from '../CartComponent.module.scss'
const ListCart = ({cart}) => {
  return (
    <Grid item md={8} sm={6} xs={12}>
        <ul className={clsx(styles.listProduct)} >
            <li></li>
            <li></li>
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Total</li>
        </ul>
        {cart?.line_items?.map((product, index) =>{
            return (
                <ItemInCart 
                index={index}
                key={index}  product={product} />
            )
        })}

    </Grid>
  )
}

export default ListCart
