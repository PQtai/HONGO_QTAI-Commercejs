import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ReactSlick.scss';
const ReactSlick = ({children ,detailsSetings }) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover : false,
        swipeToSlide : true,
        ...detailsSetings
      };
  return (
    <Slider {...settings} >
        {children}
    </Slider>
  )
}

export default ReactSlick
