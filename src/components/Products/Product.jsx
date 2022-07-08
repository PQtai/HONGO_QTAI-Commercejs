import { Grid } from '@mui/material'
import React from 'react'
import clsx from 'clsx'
import styles from './Products.module.scss';
import { Button } from '../../assets/styles/globalStyles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { setCart, setDisplayOverlay, setItemPropOverlay } from '../../redux';
import ItemQuickView from '../ItemQuickView/ItemQuickView';
import {commerce} from '../../lib/commerce';

const Product = ({product , propsStyles}) => {
  const dispatch = useDispatch();
  const handleViewProduct = () =>   {
    dispatch(setDisplayOverlay(true));
    dispatch(setItemPropOverlay(<ItemQuickView product={product} />))
  }
  const handleToAddCart = async (productId , quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    dispatch(setCart(item.cart));
  }
  return (
    <Grid item md={2.4} sm={6} xs={12} >
        <div className={clsx((propsStyles?propsStyles:styles).product)}>
          <div className={clsx((propsStyles?propsStyles:styles).imgProduct)} >
            {product.assets.map((item , index)=>{
                return (
                  <div 
                  key={index}
                  className={clsx((propsStyles?propsStyles:styles).itemImage)} 
                  alt='img product'
                  style={{
                    backgroundImage : `url(${item.url})`,
                  }} 
                  ></div>
                )
            })}
            <div className={clsx((propsStyles?propsStyles:styles).btnOptions)} >
              <Button 
              onClick={()=>{
                if(product.variant_groups.length === 0) {
                  handleToAddCart(product.id , 1);
                }
              }}
              className={clsx((propsStyles?propsStyles:styles).optionAdd)} 
              >
                <ShoppingCartOutlinedIcon/>
              </Button>
              <Button 
              onClick={handleViewProduct}
              className={clsx((propsStyles?propsStyles:styles).optionShow)} 
              >
                <VisibilityOutlinedIcon/>
              </Button>
            </div>
            <Button className={clsx((propsStyles?propsStyles:styles).btnFavorite)} >
              <FavoriteBorderIcon/>
            </Button>
          </div>
            <h4 className={clsx((propsStyles?propsStyles:styles).nameProduct)} >{product.name}</h4>
            <p className={clsx((propsStyles?propsStyles:styles).priceProduct)}>{product.price.formatted_with_code}</p>
        </div>
    </Grid>
  )
}

export default Product
