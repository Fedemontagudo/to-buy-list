import React from 'react'
import Product from './Product'


export default function ToBuyList({ productList, toggleProduct }) {
  return (
    productList.map(product => {
      return <Product className="producto" key={product.id} toggleProduct={toggleProduct} product={product} />
    })
  )
}

