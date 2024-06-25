import React, { useState, useEffect } from "react";
import data from '../config/data.json'

/* Here should be the GET request to the BE including all the data and the pagination*/

export interface Data {
  products: Product[]
}

export interface Product {
  id: number
  title: string
  price: number
  image: string
  formula: string
}

const getProductListApi = () => {
  const items:Data = data
  return items
}

export default getProductListApi