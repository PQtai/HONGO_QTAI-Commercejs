import { Container } from '@mui/material';
import React from 'react';
import HeaderCart from './HeaderCart';
import styles from './CheckoutComponent.module.scss';
import clsx from 'clsx';
import BodyCheckout from './BodyCheckout/BodyCheckout';
const CheckoutComponent = () => {
  return (
    <div className={clsx(styles.checkoutComponent)}>
      <div className={clsx(styles.headerWrap)} >
        <Container>
          <HeaderCart styles={styles} />
        </Container>
      </div>
      <Container >
          <BodyCheckout/>
      </Container>
    </div>
  )
}

export default CheckoutComponent
