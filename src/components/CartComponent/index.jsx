import { Container } from '@mui/material';
import React from 'react';
import HeaderCart from './HeaderCart';
import styles from './CartComponent.module.scss';
import clsx from 'clsx';
import BodyCart from './BodyCart/BodyCart';
const CartComponent = () => {
  return (
    <div className={clsx(styles.cartComponent)}>
      <div className={clsx(styles.headerWrap)} >
        <Container>
          <HeaderCart styles={styles} />
        </Container>
      </div>
      <Container >
        <BodyCart/>
      </Container>
    </div>
  )
}

export default CartComponent
