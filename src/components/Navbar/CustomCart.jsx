import React from "react";
import clsx from "clsx";
import { commerce } from "../../lib/commerce";
import { useDispatch, useSelector } from "react-redux";
import { infoToastMessSelector, setCart, setInfoToastMess } from "../../redux";
import ItemCart from "./ItemCart";
import { Button } from "../../assets/styles/globalStyles";
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import { Link } from "react-router-dom";
const CustomCart = ({ styles, productInCart , cart }) => {
  const dispatch = useDispatch();
  const customToastMess = { ...useSelector(infoToastMessSelector) };
  const handleDeleteProductInCart = async (elementClose ,lineItemId , name) => {
    elementClose.classList.add('disable');
    commerce.cart
      .remove(lineItemId)
      .then(({cart}) => {
        dispatch(setCart(cart));
        customToastMess.openToastMess = true;
        customToastMess.message = `Product ${name} deleted successfully!`;
        dispatch(setInfoToastMess(customToastMess));
        elementClose.classList.remove('disable');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={clsx(styles.customCart)}>
        <div className={clsx(styles.cartWrap)} >
            {productInCart?productInCart.map((product , index) => {
                return (
                    <ItemCart 
                    key={index}
                    handleDeleteProductInCart={handleDeleteProductInCart}
                    styles={styles}
                    product={product} 
                    />
                );
            }):
            <div className={clsx(styles.emptyCart)}> 
                <h2>Cart is empty</h2>
                <Button>
                  Shop now 
                  <KeyboardTabIcon/>
                </Button>
            </div>
            }
        </div>
        <div className={clsx(styles.subtotal)} >
            <div className={clsx(styles.total)} >
              <span>SUBTOTAL:</span>
              <span>{cart?.subtotal?cart.subtotal.formatted_with_symbol:'$0'}</span>
            </div>
            <Link to='/cart/' >
              <Button className={clsx(styles.viewCart)} >VIEW CART</Button>
            </Link>
            <Link to='/checkout/'>
              <Button className={clsx(styles.checkoutCart)} >CHECKOUT</Button>
            </Link>
        </div>
    </div>
  );
};

export default CustomCart;
