import clsx from "clsx";
import React from "react";
import DetailImg from "./DetailImg";
import styles from "./DetailComponent.module.scss";
import { Grid } from "@mui/material";
import Details from "./Details";
const DetailComponent = ({ productDetail, idProduct, loadingDetails }) => {
  console.log(loadingDetails);
  return (
    <div className={clsx(styles.detailComponent)}>
      <Grid container spacing={2}>
        <Grid item md={7}>
          <DetailImg
            loadingDetails={loadingDetails}
            productDetail={productDetail}
          />
        </Grid>
        <Grid item md={5}>
          <Details
            loadingDetails={loadingDetails}
            productDetail={productDetail}
            idProduct={idProduct}
            styles={styles}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailComponent;
