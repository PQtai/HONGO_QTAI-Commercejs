import { Grid } from '@mui/material'
import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux'
import { cartSelector, shippingDataSelector } from '../../../redux'
import BannerCheckout from './BannerCheckout'
import BillingDetails from './BillingDetails/BillingDetails'
import YourInfo from './YourInfo'
import styles from './BodyCheckout.module.scss'
const BodyCheckout = () => {
    const cart = useSelector(cartSelector);
    const shippingData = useSelector(shippingDataSelector);
  return (
    <div className={clsx(styles.bodyCheckout)} >
      <Grid container spacing={4}>
        <BillingDetails cart={cart}/>
        {Object.entries(shippingData).length?<YourInfo />:<BannerCheckout/>}
     </Grid>
    </div>
  )
}

export default BodyCheckout
