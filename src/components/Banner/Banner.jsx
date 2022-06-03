import React from 'react'
import clsx from 'clsx';
import styles from './Banner.module.scss';


import BannerImg1 from '../../assets/img/home-page-fashion-slider-01.jpg'
import BannerImg2 from '../../assets/img/home-page-fashion-slider-02.jpg'
import BannerImg3 from '../../assets/img/home-page-fashion-slider-03.jpg'
import ReactSlick from '../ReactSlick/ReactSlick';
import { Button } from '../../assets/styles/globalStyles';

const Banner = () => {
  return (
      <div className={clsx(styles.banner)} >
        <ReactSlick  >
            <div className={clsx(styles.item)} >
                <div 
                    className={clsx(styles.itemImg)}
                    style={{backgroundImage: 'url(' + BannerImg1 + ')'}}>
                </div>
                <div className={clsx(styles.wrapTitle)} >
                    <div className={clsx(styles.itemTitle)}>
                        <p >2022 NEW COLLECTION</p>
                        <h1>Summer collection</h1>
                        <p>Fashion should be a form of escapism and not a form of imprisonment</p>
                        <Button className={clsx(styles.btn )} >SHOP COLLECTION</Button>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.item)} >
                <div 
                    className={clsx(styles.itemImg)}
                    style={{backgroundImage: 'url(' + BannerImg2 + ')'}}>
                </div>
                <div className={clsx(styles.wrapTitle)} >
                    <div className={clsx(styles.itemTitle)}>
                        <p >2022 NEW COLLECTION</p>
                        <h1>Designer swimwear</h1>
                        <p>Fashion should be a form of escapism and not a form of imprisonment</p>
                        <Button className={clsx(styles.btn )} >SHOP COLLECTION</Button>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.item)} >
                <div 
                    className={clsx(styles.itemImg)}
                    style={{backgroundImage: 'url(' + BannerImg3 + ')'}}>
                </div>
                <div className={clsx(styles.wrapTitle)} >
                    <div className={clsx(styles.itemTitle)}>
                        <p >2022 NEW COLLECTION</p>
                        <h1>Winter sweatshirt</h1>
                        <p>Fashion should be a form of escapism and not a form of imprisonment</p>
                        <Button className={clsx(styles.btn )} >SHOP COLLECTION</Button>
                    </div>
                </div>
            </div>
        </ReactSlick>
    </div>
  )
}

export default Banner
