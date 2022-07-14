import clsx from "clsx";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryProductsSelector, productsSelector, setLoading, setResulesSearch } from "../../../redux";
import Pagination from "./Pagination/Pagination";
import Products from "../../Products/Products";
import BasicSelect from "./BasicSelect";
import styles from "./BodySearch.module.scss";
import { commerce } from "../../../lib/commerce";
import { useLocation } from "react-router-dom";
const BodySearch = ({ 
  filter_with_categories,
  filter_with_price_asc,
  filter_with_price_desc,
}) => {





  const products = useSelector(productsSelector);
  const dispatch = useDispatch();
  const categoryProducts = useSelector(categoryProductsSelector);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const [productsSearch, setProductsSearch] = useState([]);
  const location = useLocation();
  const pathnameSearch = 
  location.pathname.split('/shop/search=')[1];
  const keywordsSearch = pathnameSearch.split('&')[0].trim();
  const postType = pathnameSearch.split('&post_type=')[1];
  const [loadingSearch , setLoadingSearch] = useState(true);
  const handleGetProductsTypeIsProducts = ()=>{
    setLoadingSearch(true);
    commerce.products.list({
      query: keywordsSearch.replace(/%20/g, ' '),
      limit: 200,
    })
        .then((response) => {
          setLoadingSearch(false);
          if(!response.data){
            setProductsSearch([]);
          }else{
            setProductsSearch(response.data);
          }
          setCurrentPage(1);
        })
        .catch((errors)=>{console.log(errors);})
  }
  const handleGetProductsTypeIsCategories =  ()=>{
    setLoadingSearch(true);
    const checkIsExistCategories = categoryProducts.length?categoryProducts.some(
      (item => item.slug.toLowerCase() === keywordsSearch.toLowerCase())
    ) : true;
    
    console.log(checkIsExistCategories);
    console.log(keywordsSearch);
    if(!checkIsExistCategories){
      commerce.products.list({
        limit: 200,
      })
          .then((response) => {
            setProductsSearch(response.data);
            setLoadingSearch(false);
            setCurrentPage(1);
          })
    }else{
      commerce.products.list({
        category_slug: keywordsSearch.replace(/%20/g, ' ') 
        === 'All products' ? []:[keywordsSearch],
        limit: 200,
      })
          .then(response => { 
            setLoadingSearch(false);
            if(!response.data){
              setProductsSearch([]);
            }else{
              setProductsSearch(response.data);
            }
            setCurrentPage(1);
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
  const filterProductsWithPriceAsc = ()=>{
    if(keywordsSearch.toLocaleLowerCase() === 'asc'){
      commerce.products.list({
                sortBy: 'price',
                sortDirection: keywordsSearch.toLocaleLowerCase(),
                limit: 200,
              })
              .then(response => {
                setLoadingSearch(false);
                if(!response.data){
                  setProductsSearch([]);
                }else{
                  setProductsSearch(response.data);
                }
                setCurrentPage(1);
              })
              .catch(error => {
                console.log(error);
              });
    }else if(keywordsSearch.toLocaleLowerCase() === 'desc'){
      commerce.products.list({
                  sortBy: 'price',
                  sortDirection: keywordsSearch.toLocaleUpperCase(),
                  limit: 200,
                })
                .then(response => {
                  setLoadingSearch(false);
                  if(!response.data){
                    setProductsSearch([]);
                  }else{
                    setProductsSearch(response.data);
                  }
                  setCurrentPage(1);
                })
                .catch(error => {
                  console.log(error);
                });
    }
  }
  useEffect(() => {
    setLoadingSearch(true);
    switch (postType.replace(/%20/g, '_')) {
      case 'products':
        handleGetProductsTypeIsProducts();
        break;
      case 'categories':
        handleGetProductsTypeIsCategories();
        break;
      case 'in_shop':
        console.log('con cac');
        commerce.products.list({
          limit: 200,
        })
          .then((response) => {
            setProductsSearch(response.data);
            setLoadingSearch(false);
            setCurrentPage(1);
          })
          .catch(error => {console.log(error);});
        break;
      case 'price':
        filterProductsWithPriceAsc();
        break;
      default:
        break;
    }
  }, [keywordsSearch ,postType , dispatch]);
  const currentProducts = (
    (productsSearch.length || keywordsSearch) ? productsSearch : products
  ).slice(indexOfFirstProduct, indexOfLastProduct || 1);
    console.log('products' , products);
    console.log('productsSearch' ,productsSearch);
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
      <Products 
      loadingSearch={loadingSearch}
      currentProducts={currentProducts} />
      {currentProducts.length?
      <Pagination
        totalProducts={productsSearch.length || products.length}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        loadingSearch={loadingSearch}
      />
      :
      ''
      }
    </div>
  );
};

export default React.memo(BodySearch);
