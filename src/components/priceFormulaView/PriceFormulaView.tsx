import React, { useEffect, useState } from 'react';
import getProductListApi, { Data, Product } from '../../services/getProductListApi';
import styles from './PriceFormulaView.module.css'
import ProductDetails from '../productDetails/ProductDetails';
import ProductFormula from '../ProductFormula';
import Pagination from '../pagination';


const PriceFormulaView = () => {
  const [items, setItems] = useState<Data>();
  const [value, setValue] = useState<string>();
  const [currentPage, setCurrentPage] = useState(1);
  const length = items?.products.length 
  const productsPerPage = 50
  const lastIndex = currentPage * productsPerPage
  const firstIndex = lastIndex - productsPerPage
  const producst = items?.products.slice(firstIndex, lastIndex)

  const submitFormula = (val:string) =>
    setValue(val)

  const handlePagination = (pageNumber:number) =>
    setCurrentPage(pageNumber)

  useEffect(()=>{
    window.scrollTo({top: 0});
},[currentPage])

  useEffect(()=> {
    setItems(getProductListApi())
  },[])
  
  return (
    <div>
      <p className={styles.title}>{`showing 50 of `+length+` products`}</p>
      {producst?.map((product: Product) =>
      <div className={styles.mainContainer}>
        <ProductDetails product={product} />
        <ProductFormula
          product={product}
          submitFormula={submitFormula}
        />
        <ProductDetails product={product} value={value} />
      </div>
      )}
      <Pagination
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        length={length}
        handlePagination={handlePagination}
      />
    </div>)
}

export default PriceFormulaView