import { Grid } from '@mui/material'
import clsx from 'clsx'
import React from 'react'
import CartTotals from './CartTotals'
import ListCart from './ListCart'
import styles from '../CartComponent.module.scss'
import { useSelector } from 'react-redux'
import { cartSelector } from '../../../redux'

const BodyCart = () => {
    const cart = useSelector(cartSelector);
  return (
    <Grid className={clsx(styles.bodyCart)} container spacing={4}>
        <ListCart cart={cart} />
        <CartTotals cart={cart}/>
    </Grid>
  )
}

export default BodyCart
