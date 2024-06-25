import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}><a href='#'>My Products</a></li>
        <li className={styles.itemDisabled}><a className={styles.disable} href='#'>Prices Formulas</a></li>
        <li className={styles.itemDisabled}><a className={styles.disable} href='#'>Market position</a></li>
        <li className={styles.itemDisabled}><a className={styles.disable} href='#'>Settings</a></li>
      </ul>
    </nav>  
    )
}

export default Navbar;