import { Grid } from "@mui/material";
import React from "react";
import clsx from "clsx";
import styles from "./Products.module.scss";
import { Button, Cursor } from "../../assets/styles/globalStyles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PanoramaVerticalSelectTwoToneIcon from "@mui/icons-material/PanoramaVerticalSelectTwoTone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { infoToastMessSelector, setCart, setDisplayOverlay, setInfoToastMess, setItemPropOverlay } from "../../redux";
import ItemQuickView from "../ItemQuickView/ItemQuickView";
import { commerce } from "../../lib/commerce";
import { useState } from "react";
import { useRef } from "react";

const Product = ({ product, propsStyles }) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const infoToastMess = useSelector(infoToastMessSelector);
  const customToastMess = useRef({ ...infoToastMess });
  const handleViewProduct = () => {
    dispatch(setDisplayOverlay(true));
    dispatch(setItemPropOverlay(<ItemQuickView product={product} />));
  };
  const handleToAddCart = (productId, quantity) => {
    setDisabled(true);
    commerce.cart
      .add(productId, quantity)
      .then((item) => {
        dispatch(setCart(item.cart));
        setDisabled(false);
        customToastMess.current.openToastMess = true;
        customToastMess.current.toastMessage = "success";
        customToastMess.current.message = "Add to cart successfully";
        dispatch(setInfoToastMess(customToastMess.current));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Grid item md={2.4} sm={6} xs={12}>
      <div className={clsx((propsStyles ? propsStyles : styles).product)}>
        <div className={clsx((propsStyles ? propsStyles : styles).imgProduct)}>
          {product.assets.map((item, index) => {
            return (
              <div
                key={index}
                className={clsx((propsStyles ? propsStyles : styles).itemImage)}
                alt="img product"
                style={{
                  backgroundImage: `url(${item.url})`,
                }}
              ></div>
            );
          })}
          <div
            className={clsx((propsStyles ? propsStyles : styles).btnOptions)}
          >
            <Cursor disabled={disabled}>
              <div
                onClick={(e) => {
                  if (e.target.classList.contains("disable")) {
                    e.preventDefault();
                    return;
                  }
                  if (!product.variant_groups.length) {
                    handleToAddCart(product.id, 1, e.currentTarget);
                  } else {
                  }
                }}
                className={clsx(
                  (propsStyles ? propsStyles : styles).optionAdd,
                  {
                    disable: disabled,
                  }
                )}
              >
                {!product.variant_groups.length ? (
                  <>
                    <Button
                      className={clsx(
                        (propsStyles ? propsStyles : styles).wrapIcon
                      )}
                    >
                      <ShoppingCartOutlinedIcon />
                    </Button>
                    <Button
                      className={clsx(
                        (propsStyles ? propsStyles : styles).wrapIcon
                      )}
                    >
                      Add to cart
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className={clsx(
                        (propsStyles ? propsStyles : styles).wrapIcon
                      )}
                    >
                      <PanoramaVerticalSelectTwoToneIcon />
                    </Button>
                    <Button
                      className={clsx(
                        (propsStyles ? propsStyles : styles).wrapIcon
                      )}
                    >
                      Select options
                    </Button>
                  </>
                )}
              </div>
            </Cursor>

            <div
              onClick={handleViewProduct}
              className={clsx((propsStyles ? propsStyles : styles).optionShow)}
            >
              <Button
                className={clsx((propsStyles ? propsStyles : styles).wrapIcon)}
              >
                <VisibilityOutlinedIcon />
              </Button>
              <Button
                className={clsx((propsStyles ? propsStyles : styles).wrapIcon)}
              >
                Quick view
              </Button>
            </div>
          </div>
          <Button
            className={clsx((propsStyles ? propsStyles : styles).btnFavorite)}
          >
            <FavoriteBorderIcon />
          </Button>
        </div>
        <h4 className={clsx((propsStyles ? propsStyles : styles).nameProduct)}>
          {product.name}
        </h4>
        <p className={clsx((propsStyles ? propsStyles : styles).priceProduct)}>
          {product.price.formatted_with_code}
        </p>
      </div>
    </Grid>
  );
};

export default Product;
