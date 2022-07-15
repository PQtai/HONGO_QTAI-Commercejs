import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DetailComponent from "../../components/DetailComponent";
import LoadingDetail from "../../components/DetailComponent/LoadingDetail";
import { commerce } from "../../lib/commerce";

const Details = () => {
  const [productDetail, setProductDetail] = useState();
  const location = useLocation();
  const idProduct = location.pathname.split("/id=")[1];
  const [loadingDetails, setLoadingDetails] = useState(true);
  console.log(idProduct);
  useEffect(() => {
    commerce.products.retrieve(idProduct).then((product) => {
      setLoadingDetails(false);
      setProductDetail(product);
    });
  }, [idProduct]);
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div>
      <Container>
        {!loadingDetails ? (
          <DetailComponent
            productDetail={productDetail}
            idProduct={idProduct}
            loadingDetails={loadingDetails}
          />
        ) : (
          <LoadingDetail/>
        )}
      </Container>
    </div>
  );
};

export default Details;
