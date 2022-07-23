import clsx from 'clsx'
import React from 'react'

const HeaderCart = ({styles}) => {
  return (
    <div className={clsx(styles.headerCart)} >
      <h2 className={clsx(styles.headerTitle)} >Cart</h2>
      <ul className={clsx(styles.listItem)} >
        <li>Home</li>
        <li>Cart</li>
      </ul>
    </div>
  )
}

export default HeaderCart
