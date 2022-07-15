import React from 'react'
import clsx from 'clsx'
import styles from '../Container.module.scss'
import ReactSlick from '../../ReactSlick/ReactSlick'
import silderImg1 from '../../../assets/img/BodyImg/slider/sliderImg1.jpeg';
import silderImg2 from '../../../assets/img/BodyImg/slider/sliderImg2.jpeg';
import silderImg3 from '../../../assets/img/BodyImg/slider/sliderImg3.jpeg';
import silderImg4 from '../../../assets/img/BodyImg/slider/sliderImg4.jpeg';
import silderImg5 from '../../../assets/img/BodyImg/slider/sliderImg5.jpeg';
import silderImg6 from '../../../assets/img/BodyImg/slider/sliderImg6.jpeg';
import silderImg7 from '../../../assets/img/BodyImg/slider/sliderImg7.jpeg';
import silderImg8 from '../../../assets/img/BodyImg/slider/sliderImg8.jpeg';
import { Container } from '@mui/material';
const EndContainer = () => {
  const images = [
    {
      image : `${silderImg1}`
    },
    {
      image : `${silderImg2}`
    },
    {
      image : `${silderImg3}`
    },
    {
      image : `${silderImg4}`
    },
    {
      image : `${silderImg5}`
    },
    {
      image : `${silderImg6}`
    },
    {
      image : `${silderImg7}`
    },
    {
      image : `${silderImg8}`
    },
  ];
  const detailsSetings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };
  return (
    <div className={clsx(styles.endContainer)} >
      <Container>
          <ReactSlick detailsSetings={detailsSetings} >
            {images.map((itemImage , index)=>{
              return (
                <div key={index} className={clsx(styles.wrapItem)} >
                  <div className={clsx(styles.itemImage)}
                  style={{
                    backgroundImage : `url(${itemImage.image})`
                  }}/>
                </div>
              )
            })}
          </ReactSlick>
        </Container>
    </div>
  )
}

export default EndContainer
