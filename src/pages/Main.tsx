import React from 'react';
import styles from './Main.module.css'
import Navbar from '../components/navbar';
import ProductList from '../components/productDetails';
import PriceFormulaView from '../components/priceFormulaView';

const Main = () => {
    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <Navbar />
        </div>
        <div className={styles.productListContainer}>
          <PriceFormulaView />
        </div>   
      </div>
    )
}

export default Main