import { Grid } from '@mui/material';
import React from 'react'
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import BannerSearch from '../../SearchCpn/BannerSearch/BannerSearch';
import { displayOverlaySelector, itemPropOverlaySelector, search_parametersSelector } from '../../../redux';
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
  const itemPropOverlay = useSelector(itemPropOverlaySelector);
  const search_parameters = useSelector(search_parametersSelector)
  const {post_type} = search_parameters;
  return (
    <div>
        <Navbar/>
        <BannerSearch/>
        <Grid p={2} container spacing={1} >
          <Grid  item xs={2}>
            <div className={clsx(styles.wrapFilter)} >
              <Categories post_type={post_type} />
              <FilByPrice post_type={post_type} />
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
