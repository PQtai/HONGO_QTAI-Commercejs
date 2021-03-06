import React, { useEffect, useRef, useState } from 'react'
import Intro from './Intro'
import clsx from 'clsx';
import styles from '../Container.module.scss';
import { useSelector } from 'react-redux';
import { loadingSelector, productsSelector } from '../../../redux';
import Suggestions from './Suggestions';
import Blog from './Blog';
import {Grid } from '@mui/material';
import Product from '../../Products/Product';
import Loading from '../../Loading/Loading';
import { useCallback } from 'react';
import ReactSlick from '../../ReactSlick/ReactSlick'

const BodyContainer = () => {
  const advice = useRef({
    name : 'Great Selection',
    description : 'Follow the most popular trends and get exclusive items from hongo shop'
  })
  const Latest = useRef({
    name : 'Latest Blogs',
    description : 'Way is there to get clothing you’re sure to love than by making it your know'
  })
  const [productsNotable , setProductsNotable] = useState();
  const loading = useSelector(loadingSelector);
  const products = useSelector(productsSelector);
  const detailsSetings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover : true,
  };
  const getProductsNotable = useCallback(()=> {
    const findProductsNotable = products.filter((product , index) =>{
      return product.sort_order >= 150;
    })
    setProductsNotable(findProductsNotable);
  },[products])
  useEffect(()=>{
    getProductsNotable();
  },[products , getProductsNotable]);

  return (
    <div className={clsx(styles.bodyContainer)} >
      <Intro props={advice}/>
      <div className={clsx(styles.productsNotable)} >
        <Grid container spacing={1} >
          {
          loading?
          ([1 , 2 , 3 , 4 , 5].map((item, index) => (
                <Loading key={index} />
            )))
          :
          <div className={clsx(styles.wrapSlick)} >
            <ReactSlick detailsSetings={detailsSetings} >
              {
                  productsNotable?.map((product) => (
                  (<Product 
                  style={{
                    width: '100%',
                  }} 
                  key={product.id} 
                  propsStyles={styles}
                  product={product}
                  />)
                ))
              }
            </ReactSlick>
          </div>
          }
        </Grid>
      </div>
      <Suggestions/>
      <Intro props={Latest}/>
      <Blog/>
    </div>
  )
}

export default BodyContainer
