import React from "react";
import clsx from "clsx";
import { commerce } from "../../lib/commerce";
import { useDispatch, useSelector } from "react-redux";
import { infoToastMessSelector, setCart, setInfoToastMess } from "../../redux";
import ItemCart from "./ItemCart";
const CustomCart = ({ styles, productInCart }) => {
  const dispatch = useDispatch();
  const customToastMess = { ...useSelector(infoToastMessSelector) };
  const handleDeleteProductInCart = async (lineItemId , name) => {
    commerce.cart
      .remove(lineItemId)
      .then(({cart}) => {
        dispatch(setCart(cart));
        customToastMess.openToastMess = true;
        customToastMess.message = `Product ${name} deleted successfully!`;
        dispatch(setInfoToastMess(customToastMess));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={clsx(styles.customCart)}>
        <div className={clsx(styles.cartWrap)} >
            {productInCart?.map((product) => {
                return (
                    <ItemCart 
                    handleDeleteProductInCart={handleDeleteProductInCart}
                    styles={styles}
                    product={product} 
                    />
                );
            })}
        </div>
        <div className={clsx(styles.subtotal)} >

        </div>
    </div>
  );
};

export default CustomCart;
