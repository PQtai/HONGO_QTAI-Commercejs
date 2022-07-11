import React from 'react'
import  { Grid} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import styles from './Loading.module.scss';
import clsx from 'clsx';
const Loading = () => {
  return (
    <Grid item md={2.4} sm={6} xs={12}>
      <div className={clsx(styles.product)} >
        <div className={clsx(styles.imgProduct)} >
          <Skeleton height='220px' width='100%' variant='rectangular' ></Skeleton>
        </div>
        <h4 className={clsx(styles.nameProduct)} >
          <Skeleton width='60%' variant='text' ></Skeleton>
        </h4>
        <p className={clsx(styles.priceProduct)} >
          <Skeleton width='40%' variant='text' ></Skeleton>
        </p>
      </div>
    </Grid>
  )
}

export default Loading
