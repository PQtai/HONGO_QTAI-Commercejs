import { Grid } from '@mui/material'
import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux'
import { shippingDataSelector } from '../../../redux'
import styles from './BodyCheckout.module.scss'
const YourInfo = () => {
  const shippingData = useSelector(shippingDataSelector);
  const shippingDataArr = Object.entries(shippingData)
  .map(([code, name]) => ({
    id : code,
    label : name,
  }))
  .filter(shippingData => (
    shippingData.id !== 'shippingOption' && shippingData.id !== 'shippingCountry' && shippingData.id !== 'shippingSubdivision'
  ))
  return (
    <Grid className={clsx(styles.yourInfo)} item md={5} sm={6} xs={12}>
        <h3>Your Info</h3>
        <ul className={styles.infoWrap} >
          {shippingDataArr.map((data , index)=>{
              return (
                  <li key={index}>
                    <span>{data.id}:</span>
                    <span>{data.label}</span>
                  </li>
              )
          })}
        </ul>
    </Grid>
  )
}

export default YourInfo
