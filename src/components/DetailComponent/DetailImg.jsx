import clsx from "clsx";
import React, { useState } from "react";
import styles from "./DetailComponent.module.scss";
const DetailImg = ({ productDetail }) => {
  const [isOptionImg , setIsOptionImg] = useState(productDetail?.image?.url);
  return (
    <div className={clsx(styles.detailImg)}>
      <div className={clsx(styles.optionImg)} >
        {productDetail?.assets?.map((item, index)=>{
          return (
            <img 
            onClick={()=>{
              setIsOptionImg(item.url);
            }}
            className={clsx({
              [styles.opacity]: item.url === isOptionImg,
            })}
            key={index} src={item.url} alt="imgProduct" />
          )
        })}
      </div>
      <div className={clsx(styles.isOptionWrap)}>
        <div
          style={{
            backgroundImage: `url(${isOptionImg})`,
          }}
          className={clsx(styles.isOptionImg)}
        ></div>
      </div>
    </div>
  );
};

export default DetailImg;
