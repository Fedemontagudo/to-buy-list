import React from 'react'
import Product from './Product'


export default function ToBuyList({ productList, toggleProduct }) {
  return (
    productList.map(product => {
      return <Product key={product.id} toggleProduct={toggleProduct} product={product} />
    })
  )
}

