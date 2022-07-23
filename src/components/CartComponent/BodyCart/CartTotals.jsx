import { Grid } from '@mui/material'
import clsx from 'clsx'
import React from 'react'
import { Button } from '../../../assets/styles/globalStyles'
import styles from '../CartComponent.module.scss'
const CartTotals = ({cart}) => {
  return (
    <Grid  item md={4} sm={6} xs={12}>
        <div className={clsx(styles.totalWrap)} >
            <ul className={clsx(styles.listTotals)} >
                <li>Cart totals</li>
                <li>Total <span>{cart?.subtotal?.formatted_with_symbol}</span></li>
            </ul>
            <Button className={clsx(styles.btnCheckout)} >Proceed to checkout</Button>
        </div>
    </Grid>
  )
}

export default CartTotals

