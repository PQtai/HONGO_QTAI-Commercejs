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
            {product.selected_options.length?
              product.selected_options.map((option , index)=>{
                return (
                  <p key={index}>{option.group_name} : {option.option_name}</p>
                )
              }):
              <></>
            }
            <p>{product.quantity}x{product.line_total.formatted_with_symbol}</p>
        </div>
        <div className={clsx(styles.btnClose)} onClick={(e) => handleDeleteProductInCart(e.currentTarget,product.id, product.name)}>
            <Button>
                <CloseIcon />
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
