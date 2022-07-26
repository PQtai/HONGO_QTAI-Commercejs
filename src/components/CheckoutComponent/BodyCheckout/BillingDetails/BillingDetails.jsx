import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { commerce } from '../../../../lib/commerce'
import { setShippingData, shippingDataSelector } from '../../../../redux'
import FormAddress from './FormAddress'
import FormPayment from './FormPayment'

const BillingDetails = ({cart}) => {
    const [checkoutToken , setChekoutToken] = useState(null);
    const [nextPayment, setNextPayment] = useState(false);
    const shippingData = useSelector(shippingDataSelector);
    const dispatch = useDispatch();


    const next = (data)=>{
        dispatch(setShippingData(data));
        setNextPayment(true);
    }
    useEffect(()=>{
        const generateToken = async ()=>{
            try {
                const token = await commerce.checkout.generateToken(cart?.id , {type : 'cart'});
                setChekoutToken(token);
            } catch (error) {
                
            }
        } 
        cart.id && generateToken();
    },[cart]);
  return (
    <Grid item md={7} sm={6} xs={12}>
        <h3>Billing Details</h3>
        {!nextPayment?
        <>
            <p style={{
                fontSize: '14px',
                marginTop: '10px',
            }} >Shipping address</p>
            {checkoutToken && <FormAddress checkoutToken={checkoutToken} next={next}/>}
        </>
        :
        <>
            <FormPayment 
            shippingData={shippingData} 
            checkoutToken={checkoutToken} 
            setNextPayment={setNextPayment}/>
        </>
        }
        
    </Grid>
  )
}

export default BillingDetails
