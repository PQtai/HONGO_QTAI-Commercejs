import { Grid } from '@mui/material'
import clsx from 'clsx'
import React from 'react'
import styles from './BodyCheckout.module.scss'

const BannerCheckout = () => {
  return (
    <Grid className={clsx(styles.bannerCheckout)} item md={5} sm={6} xs={12}>
        <div className={clsx(styles.imgBanner)} ></div>
    </Grid>
  )
}

export default BannerCheckout
