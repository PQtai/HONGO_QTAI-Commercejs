import clsx from "clsx";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { productsSelector } from "../../../redux";
import Pagination from "./Pagination/Pagination";
import Products from "../../Products/Products";
import BasicSelect from "./BasicSelect";
import styles from "./BodySearch.module.scss";
const BodySearch = ({ results_search }) => {
  console.log(results_search);
  const products = useSelector(productsSelector);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const [productsSearch, setProductsSearch] = useState([]);
  console.log("con cac");
  const handelGetProductsSearch = () => {
    const isProductsSearch = products.filter((product, index) => {
      return product.name.toLowerCase().includes(results_search);
    });
    console.log(isProductsSearch);
    setProductsSearch(isProductsSearch);
    setCurrentPage(1);
  };
  useEffect(() => {
    handelGetProductsSearch();
  }, [results_search]);
  console.log(productsSearch.slice(1, 10));
  const currentProducts = (
    (productsSearch.length || results_search) ? productsSearch : products
  ).slice(indexOfFirstProduct, indexOfLastProduct || 1);

  return (
    <div className={clsx(styles.bodySearch)}>
      {currentProducts.length?
      <div className={clsx(styles.sort)}>
        <div className={clsx(styles.sortDisplay)}>
          <span>Hiển thị 1–12 trong số 112 kết quả</span>
        </div>
        <BasicSelect styles={styles} />
      </div>
      :
      ''}
      <Products currentProducts={currentProducts} />
      {currentProducts.length?
      <Pagination
        totalProducts={productsSearch.length || products.length}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      :
      ''
      }
    </div>
  );
};

export default React.memo(BodySearch);
