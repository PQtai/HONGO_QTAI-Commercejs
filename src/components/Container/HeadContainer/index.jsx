import { Grid } from '@mui/material';
import clsx from 'clsx'
import React from 'react'
import styled from '../Container.module.scss';


import bodyImg1 from '../../../assets/img/BodyImg/BodyImg-1.jpg';
import bodyImg2 from '../../../assets/img/BodyImg/BodyImg-2.jpg';
import bodyImg3 from '../../../assets/img/BodyImg/BodyImg-3.jpg';
import bodyImg4 from '../../../assets/img/BodyImg/BodyImg-4.jpg';
const HeadContainer = () => {
  return (
    <div className={clsx(styled.headContainer)}>
        <Grid spacing={2} container p={2} >
            <Grid item md={6}>
                <Grid container pb={2}>
                    <img alt='body--Img' className={clsx(styled.img)} src={bodyImg1} ></img>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={6} sm={6}>
                        <img alt='body--Img' className={clsx(styled.img)} src={bodyImg3} ></img>
                    </Grid>
                    <Grid item md={6} sm={6}>
                        <img alt='body--Img' className={clsx(styled.img)} src={bodyImg4} ></img>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={6}>
                <img alt='body--Img' className={clsx(styled.img)} src={bodyImg2} ></img>
            </Grid>
        </Grid>
    </div>
  )
}

export default HeadContainer
