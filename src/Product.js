import React from 'react'

export default function Product({ product }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={product.complete} />
        {product.name}
      </label>
    </div>
  )
}
