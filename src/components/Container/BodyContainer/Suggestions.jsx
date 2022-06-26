import React, { useRef } from 'react'
import clsx from 'clsx'
import styles from '../Container.module.scss';
import { Grid } from '@mui/material';
import { Button } from '../../../assets/styles/globalStyles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Suggestions = () => {
    const elementSuggestionsLeft = useRef();
    const elementSuggestionsRight = useRef();
    const elementExemplary = useRef();
    const config = {
        threshold : 0
    }
    const handler = (entries , observer)=>{
        entries.forEach((entrie,index)=>{
            if(entrie.isIntersecting){
                elementSuggestionsLeft.current.classList.add(clsx(styles.active));
                elementSuggestionsRight.current.classList.add(clsx(styles.active));
            }else{
                if(elementSuggestionsLeft.current.classList.contains(clsx(styles.active))){
                    observer.disconnect();
                }
            }
        })
    }
    const observer = new IntersectionObserver(handler,config);
    elementExemplary.current && observer.observe(elementExemplary.current);
  return (
      <div 
      ref={elementExemplary}
      className={clsx(styles.suggestions)} >
        <Grid container spacing={2} >
            <Grid item md={6} >
                <div 
                ref={elementSuggestionsLeft}
                className={clsx(styles.suggestionsLeft)} >
                    <div 
                    className={clsx(styles.img)}
                    style={{
                        backgroundImage : 'url("https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
                    }}
                    ></div>
                    <div className={clsx(styles.wrap)} >
                        <p>The new collections</p>
                        <h1>LOOK BOOK</h1>
                        <Button>THE LOOKBOOK</Button>
                    </div>
                </div>
            </Grid>
            <Grid item md={6} >
                <div 
                ref={elementSuggestionsRight}
                className={clsx(styles.suggestionsRight)} >
                    <div 
                    className={clsx(styles.img)}
                    style={{
                        backgroundImage : 'url("https://images.pexels.com/photos/5662862/pexels-photo-5662862.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
                    }}
                    ></div>
                    <div className={clsx(styles.wrap)} >
                        <h1>HURRY!</h1>
                        <p>NEWSLETTER AND GET DISCOUNT 25% OFF</p>
                        <h3>Sign up for newsletter and get 10% cash back offer</h3>
                        <div className={clsx(styles.email)} >
                            <input type="text" placeholder='Enter your email...'/>
                            <Button>
                                SUBSCRIBE
                                <ArrowRightAltIcon/>
                            </Button>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Suggestions
