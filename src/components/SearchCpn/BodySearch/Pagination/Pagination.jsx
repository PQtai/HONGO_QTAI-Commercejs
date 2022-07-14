import clsx from 'clsx';
import React from 'react'
import { useEffect } from 'react';
import styles from './Pagination.module.scss'
const Pagination = ({
    totalProducts ,
    productsPerPage,
    currentPage,
    setCurrentPage,
    loadingSearch,
}) => {
    
    const handleCurrentPage = (indexPage)=>{
        setCurrentPage(indexPage);
    }
    useEffect(()=>{
        window.scrollTo(0, 560);
    },[currentPage])
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log('total' , totalProducts);
    console.log('productsPerPage' , productsPerPage);
  return (
    <div className={clsx(styles.pagination)} >
        {loadingSearch?'':
        <ul className={clsx(styles.listPage)} >
            {pageNumbers.map((indexPage , index) =>{
                return (
                    <li 
                    onClick={()=>{
                        handleCurrentPage(indexPage);
                    }}
                    className={clsx(styles.indexPage , {
                        [styles.active]: indexPage === currentPage
                    })} key={index} >{indexPage}</li>
                )
            })}
        </ul>
        }
    </div>
  )
}

export default React.memo(Pagination);
