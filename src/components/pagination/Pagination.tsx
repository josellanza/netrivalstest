import React from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
  currentPage: number
  productsPerPage: number
  length?: number
  handlePagination: (pageNumber:number) => void
}

const Pagination = (props:PaginationProps) => {
  const { currentPage, productsPerPage, length, handlePagination } = { ...props }
  const paginationNumbers = [];

  if (length) {
    for (let i = 1; i <= Math.ceil(length / productsPerPage); i++) {
      paginationNumbers.push(i);
    }
  }

  return (
    <div className={styles.btnContainer}>
      {paginationNumbers.map((pageNumber, i) => (
        <button className={i === (currentPage - 1) ? styles.buttonActive : styles.button } onClick={() => handlePagination(pageNumber)} key={i}>{pageNumber}</button>
      ))}
    </div>
  );
};

export default Pagination;