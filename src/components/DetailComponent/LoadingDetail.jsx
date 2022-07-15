import { Grid, Skeleton } from "@mui/material";
import clsx from "clsx";
import React from "react";
import styles from "./DetailComponent.module.scss";
const LoadingDetail = () => {
  return (
    <div className={clsx(styles.detailComponent)}>
      <Grid container spacing={2}>
        <Grid item md={7}>
          <div className={clsx(styles.detailImg)}>
            <div className={clsx(styles.optionImg)}>
              <Skeleton
                className={clsx(styles.skeleton)}
                height="150px"
                width="100%"
                variant="rectangular"
              ></Skeleton>
              <Skeleton
                className={clsx(styles.skeleton)}
                height="150px"
                width="100%"
                variant="rectangular"
              ></Skeleton>
            </div>
            <div className={clsx(styles.isOptionWrap)}>
              <Skeleton
                className={clsx(styles.skeleton)}
                height="400px"
                width="100%"
                variant="rectangular"
              ></Skeleton>
            </div>
          </div>
        </Grid>
        <Grid item md={5}>
            <ul className={clsx(styles.listInfo)} >
                <li className={clsx(styles.itemInfo)} >
                    <Skeleton
                    className={clsx(styles.itemInfoSkeleton)}
                    height="70px"
                    width="100%"
                    variant="text"
                    ></Skeleton>
                </li>
                <li className={clsx(styles.itemInfo)} >
                    <Skeleton
                    className={clsx(styles.itemInfoSkeleton)}
                    height="100px"
                    width="100%"
                    variant="text"
                    ></Skeleton>
                </li>
                <li className={clsx(styles.itemInfo)} >
                    <Skeleton
                    className={clsx(styles.itemInfoSkeleton)}
                    height="40px"
                    width="50%"
                    variant="text"
                    ></Skeleton>
                    <Skeleton
                    className={clsx(styles.itemInfoSkeleton)}
                    height="40px"
                    width="50%"
                    variant="text"
                    ></Skeleton>
                    <Skeleton
                    className={clsx(styles.itemInfoSkeleton)}
                    height="30px"
                    width="10%"
                    variant="text"
                    ></Skeleton>
                    <Skeleton
                    className={clsx(styles.itemInfoSkeleton)}
                    height="54px"
                    width="60%"
                    variant="text"
                    ></Skeleton>
                </li>
                <li className={clsx(styles.itemInfo)} >
                    <Skeleton
                    className={clsx(styles.itemInfoSkeleton)}
                    height="200px"
                    width="100%"
                    variant="text"
                    ></Skeleton>
                </li>
                <li className={clsx(styles.itemInfo)} >
                    <Skeleton
                    className={clsx(styles.itemInfoSkeleton)}
                    height="20px"
                    width="30%"
                    variant="text"
                    ></Skeleton>
                </li>
            </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoadingDetail;
