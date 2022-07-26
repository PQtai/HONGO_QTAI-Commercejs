import { Grid } from '@mui/material'
import clsx from 'clsx'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../../../../assets/styles/globalStyles'
import { setShippingData } from '../../../../redux'
import styles from '../BodyCheckout.module.scss'
import Reviews from './Reviews'
const FormPayment = ({checkoutToken , setNextPayment}) => {
  const dispatch = useDispatch();

  return (
    <form className={clsx(styles.formPayment)} >
        <Reviews checkoutToken={checkoutToken} setNextPayment={setNextPayment}/>
        <div className={clsx(styles.optionsPayment)} >
            <Button
            type='button'
            onClick={()=>{
                setNextPayment(false);
                dispatch(setShippingData({}));
            }}
            >Back</Button>
            <Button>Pay {checkoutToken.live.subtotal.formatted_with_symbol}</Button>
        </div>
    </form>
  )
}

export default FormPayment
