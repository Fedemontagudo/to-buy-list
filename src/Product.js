import React from 'react'

export default function Product({ product, toggleProduct }) {
  function handleProductClick() {
    toggleProduct(product.id)
  }
  return (
    <div>
      <label>
        <input type="checkbox" checked={product.complete} onChange=
          {handleProductClick} />
        {product.name}
      </label>
    </div>
  )
}
