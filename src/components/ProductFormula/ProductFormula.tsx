import React, { useEffect, useState } from 'react';
import { Product } from "../../services/getProductListApi"
import styles from './ProductFormula.module.css'

interface ProductFormulaProps {
  product: Product
  submitFormula: (string:string) => void
}

const ProductFormula = (props: ProductFormulaProps) => {
  const id:Number = props.product.id
  const product:Product = props.product
  const {submitFormula} = { ...props }

  const[newValue, setNewValue] = useState<string>()
  const[isValid, setIsvalid] = useState<boolean>(true)
  
  
  
  useEffect(() => {
    setNewValue(product.formula)
  },[product.formula])

  const saveNewValue = (val:string) =>
    setNewValue(val)
  
  const validateFormula = (val?:string) => {
    const isStatingWithSymbol = new RegExp('^[/*+-]')
    const validationRegExp:RegExp = new RegExp('^[\\d*-/+]+$');
    if (val === undefined) {
      product.formula = ''
    } else 
    if (val === '') {
      product.formula = ''
      submitFormula(val)
    } else 
    if (validationRegExp.test(val) && isStatingWithSymbol.test(val)) {
      setIsvalid(true)
      product.formula = val
      submitFormula(val)
    } else {
      setIsvalid(false)
    }
  }

  const cancelBtn = () => {
    setNewValue(product.formula)
    setIsvalid(true)
 }
  return (
    <div className={styles.constainer}> 
      <div className={styles.formulaContainer}>
        <div className={styles.buttonsContainer}>
          <h1 className={styles.price}>{product.price}€</h1>
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            placeholder='introduce here the formula'
            id="formula"
            name="formula"
            value={newValue}
            type='text'
            onChange={(e) => {
              saveNewValue(e.target.value)
            }}
          />
          {!isValid && <p color='red'>The formula must begin with */-+ and must contain only numbers</p>}
        </div>
      </div>
      <div className={styles.submitBtnsContainer}>
        <button className={styles.SubmitBtn} autoFocus onClick={() => cancelBtn()}>Cancel</button>
        <button
          disabled={newValue !== product.formula ? false : true}
          className={newValue !== product.formula ? styles.SubmitBtn : styles.submitBtnDisabled}
          onClick={() => newValue !== product.formula && validateFormula(newValue)}
          >
            Save
        </button>
      </div>
    </div>
  )
}

export default ProductFormula