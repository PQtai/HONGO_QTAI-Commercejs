import React from 'react'
import clsx from 'clsx'
import styles from './Footer.module.scss'
import { Grid } from '@mui/material'
import { Button } from '../../assets/styles/globalStyles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Footer = () => {
  return (
    <div className={clsx(styles.footer)} >
        <div className={clsx(styles.wrap)} >
            <div className={clsx(styles.FHeader)} >
                <Grid container spacing={2} >
                    <Grid item md={7}>
                        <div className={clsx(styles.getDiscount)} >
                            <p>LAST CHANCE TO WIN OUR DISCOUNT!</p>
                            <div className={clsx(styles.wrapInput)} >
                                <input placeholder='Enter your email...' ></input>
                                <Button>
                                    SUBSCRIBE
                                    <ArrowForwardIcon/>
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={5}>
                        <div className={clsx(styles.socialNetwork)} >
                            <p>ON SOCIAL NETWORKS</p>
                            <div className={clsx(styles.wrapIcon)} >
                                <ul className={clsx(styles.listIcon)} >
                                    <li className={clsx(styles.itemIcon)} >
                                        <FacebookIcon/>
                                    </li>
                                    <li className={clsx(styles.itemIcon)} >
                                        <TwitterIcon/>
                                    </li>
                                    <li className={clsx(styles.itemIcon)} >
                                        <LinkedInIcon/>
                                    </li>
                                    <li className={clsx(styles.itemIcon)} >
                                        <InstagramIcon/>
                                    </li>
                                    <li className={clsx(styles.itemIcon)} >
                                        <PinterestIcon/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className={clsx(styles.FBody)} > 
                <Grid container spacing={1} >
                    <Grid item md={3}>
                        <div className={clsx(styles.trademark)} >
                            <h4>HONGO-QT</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum is simply dummy text of industry lorem ipsum is simply dummy typesetting text.</p>
                        </div>
                    </Grid>
                    <Grid item container md={5.5} spacing={1} >
                        <Grid item md={4} >
                            <h5 className={clsx(styles.nameInfo)} >CATEGORIES</h5>
                            <ul className={clsx(styles.listInfo)} >
                                <li className={clsx(styles.itemInfo)} >
                                    Women collection
                                </li>
                                <li className={clsx(styles.itemInfo)} >
                                    Men collection
                                </li>
                                <li className={clsx(styles.itemInfo)} >
                                    Child collection
                                </li>
                                <li className={clsx(styles.itemInfo)} >
                                    Accessories
                                </li>
                                <li className={clsx(styles.itemInfo)} >
                                    Leather shoes
                                </li>
                            </ul>
                        </Grid>
                        <Grid item md={4} >
                            <h5 className={clsx(styles.nameInfo)} >CUSTOMER</h5>
                            <ul className={clsx(styles.listInfo)} >
                                <li className={clsx(styles.itemInfo)} >
                                    Help and support                                </li>
                                <li className={clsx(styles.itemInfo)} >
                                    Shipping and delivery
                                </li>
                                <li className={clsx(styles.itemInfo)} >
                                    Payment method
                                </li>
                                <li className={clsx(styles.itemInfo)} >
                                    Terms and conditions
                                </li>
                                <li className={clsx(styles.itemInfo)} >
                                    Privacy policy
                                </li>
                            </ul>
                        </Grid>
                        <Grid item md={4} >
                            <h5 className={clsx(styles.nameInfo)} >COMPANY</h5>
                            <ul className={clsx(styles.listInfo)} >
                                <li className={clsx(styles.itemInfo)} >
                                    About company
                                </li>
                                <li className={clsx(styles.itemInfo)} >
                                    Our services
                                </li>
                                <li className={clsx(styles.itemInfo)} >
                                    Get the voucher
                                </li>
                                <li className={clsx(styles.itemInfo)} >
                                    Store locator
                                </li>
                                <li className={clsx(styles.itemInfo)} >
                                    Contact us
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid item md={3.5}>
                        <h5 className={clsx(styles.nameInfo)} >FOLLOW US ON INSTAGRAM</h5>
                    </Grid>
                </Grid>
            </div>
        </div>
        <div className={clsx(styles.FClose)} > 
        <div className={clsx(styles.wrap)} >
            <div className={clsx(styles.supplier)} >
            © 2022 HONGO-QT is Proudly Powered by ThemeZaa
            </div>
            <div className={clsx(styles.paymentCart)} >
                <img src="https://hongo.b-cdn.net/wp-content/uploads/2019/05/footer-payment-icon.png" alt="payment" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
