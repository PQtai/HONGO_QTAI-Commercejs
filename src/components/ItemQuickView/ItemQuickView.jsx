import React from "react";
import styles from "./ItemQuickView.module.scss";
import clsx from "clsx";
import { Button } from "../../assets/styles/globalStyles";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import {
  setDisplayOverlay
} from "../../redux";
import Details from "../DetailComponent/Details";





const ItemQuickView = ({ product }) => {
  const dispatch = useDispatch();
  
  const handleCloseQuickView = () => {
    dispatch(setDisplayOverlay(false));
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={clsx(styles.itemQuickView)}
    >
      <div className={clsx(styles.wrapQuickView)}>
        <div className={clsx(styles.wrapImg)}>
          {product?.assets.map((item, index) => {
            return (
              <div
                key={index}
                className={clsx(styles.itemImage)}
                alt="img product"
                style={{
                  backgroundImage: `url(${item.url})`,
                }}
              ></div>
            );
          })}
        </div>
        <Details productDetail={product} styles={styles} />
      </div>
      <Button onClick={handleCloseQuickView} className={clsx(styles.btnClose)}>
        <CloseIcon />
      </Button>
    </div>
  );
};

export default ItemQuickView;
