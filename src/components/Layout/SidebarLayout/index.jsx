import { Grid } from '@mui/material';
import React from 'react'
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import BannerSearch from '../../SearchCpn/BannerSearch/BannerSearch';
import { displayOverlaySelector, itemPropOverlaySelector } from '../../../redux';
import { useSelector } from 'react-redux';
import Overlay from '../../Overlay/Overlay';
import ToastMessage from '../../ToastMessage/ToastMessage';
import Categories from './Categories';
import FilByColor from './FilByColor';
import FilBySize from './FilBySize';
import FilByPrice from './FilByPrice';
import clsx from 'clsx';
import styles from './SidebarLayout.module.scss'


const SearchLayout = ({children}) => {
  const displayOverlay = useSelector(displayOverlaySelector);
  const itemPropOverlay = useSelector(itemPropOverlaySelector)
  return (
    <div>
        <Navbar/>
        <BannerSearch/>
        <Grid p={2} container spacing={1} >
          <Grid  item xs={2}>
            <div className={clsx(styles.wrapFilter)} >
              <Categories/>
              <FilByPrice/>
              {/* <FilByColor/>
              <FilBySize/> */}
              <div className={clsx(styles.endFilter)} >
                <div className={clsx(styles.imgSymbolism)}/>
              </div>
            </div>
          </Grid>
          <Grid item xs={10}>{children}</Grid>
        </Grid>
        <Footer/>
        {displayOverlay && <Overlay component={itemPropOverlay} />}
        <ToastMessage/>
    </div>
  )
}

export default SearchLayout;
