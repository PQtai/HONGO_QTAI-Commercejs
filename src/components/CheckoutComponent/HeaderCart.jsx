import clsx from 'clsx'
import React from 'react'

const HeaderCart = ({styles}) => {
  return (
    <div className={clsx(styles.headerCheckout)} >
      <h2 className={clsx(styles.headerTitle)} >CHECKOUT</h2>
      <ul className={clsx(styles.listItem)} >
        <li>Home</li>
        <li>Checkout</li>
      </ul>
    </div>
  )
}

export default HeaderCart
