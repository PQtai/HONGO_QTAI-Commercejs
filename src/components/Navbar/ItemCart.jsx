import React from "react";
import clsx from "clsx";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "../../assets/styles/globalStyles";
const ItemCart = ({ styles, product, handleDeleteProductInCart }) => {
  return (
    <div className={clsx(styles.itemCart)}>
      <div className={clsx(styles.wrapImg)}>
        <div
          style={{
            backgroundImage: "url(" + product.image.url + ")",
          }}
          className={clsx(styles.cartImg)}
        />
      </div>
      <div className={clsx(styles.infoProduct)} >
        <div className={clsx(styles.itemInfo)}>
            <h4>{product.name}</h4>
            <p>{product.quantity}x{product.line_total.formatted_with_symbol}</p>
            
        </div>
        <div className={clsx(styles.btnClose)} onClick={() => handleDeleteProductInCart(product.id, product.name)}>
            <Button>
                <CloseIcon />
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
