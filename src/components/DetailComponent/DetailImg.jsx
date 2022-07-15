import clsx from "clsx";
import React from "react";
import styles from "./DetailComponent.module.scss";
const DetailImg = ({ productDetail }) => {
  console.log(productDetail);
  return (
    <div className={clsx(styles.detailImg)}>
      <div className={clsx(styles.optionImg)} >
        {productDetail?.assets?.map((item, index)=>{
          return (
            <img key={index} src={item.url} alt="imgProduct" />
          )
        })}
      </div>
      <div className={clsx(styles.isOptionWrap)}>
        <div
          style={{
            backgroundImage: `url(${productDetail?.image?.url})`,
          }}
          className={clsx(styles.isOptionImg)}
        ></div>
      </div>
    </div>
  );
};

export default DetailImg;
