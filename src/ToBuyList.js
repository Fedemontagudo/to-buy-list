import React from 'react'
import Product from './Product'


export default function ToBuyList({ productList }) {
  return (
    productList.map(product => {
      return <Product product={product} />
    })
  )
}

