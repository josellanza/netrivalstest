import React from 'react';
import { Product } from '../../services/getProductListApi';
import styles from './ProductDetails.module.css'

interface ProductDetailsProps {
  product: Product
  value?: string
  update?: boolean
}

const applyFormula = (price:number, value:string) => {
  const symbol = value.charAt(0);
  const number:number = parseFloat(value.slice(1))
  return !value
  ? price 
    : symbol === '/'
    ? price/number
      :  symbol === '*'
      ? price*number
        :  symbol === '+' 
        ? price+number
          : price-number
}

const ProductDetails = (props:ProductDetailsProps) => {
  const { product, value } = { ...props }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container}>
          <div className={styles.title}>
            {product.title}
          </div>
          <div className={styles.image}>
            <img src="https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png" width="150" height="200" />
          </div>
          <div className={styles.price}>
            {value ? applyFormula(product.price, product.formula) : product.price}€
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails