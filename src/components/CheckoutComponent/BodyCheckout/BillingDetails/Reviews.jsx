import clsx from 'clsx'
import React from 'react'
import { Button } from '../../../../assets/styles/globalStyles'
import styles from '../BodyCheckout.module.scss'
const Reviews = ({checkoutToken }) => {
  return (
    <div className={clsx(styles.reviews)} >
      <h5>Order summary</h5>
      <ul className={clsx(styles.listProduct)} >
        {checkoutToken.live.line_items.map( (product , index) =>{
            return (
                <li key={index} className={clsx(styles.items)} >
                    <div>
                        <p>{product.name}</p>
                        <span>X {product.quantity}</span>
                    </div>
                    <p>{product.line_total.formatted_with_symbol}</p>
                </li>
            )
        })}
        <li className={clsx(styles.checkout)} >
            <div className={clsx(styles.viewTotal)} >
                <h3>Total</h3>
                <p>{checkoutToken.live.subtotal.formatted_with_symbol}</p>
            </div>
            <div className={clsx(styles.payWith)} >
                <Button>Choose payment method</Button>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default Reviews
