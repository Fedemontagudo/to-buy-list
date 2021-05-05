import React, { useState, useRef, useEffect } from 'react'
import ToBuyList from './ToBuyList'
import './App.css';
import uuidv4 from 'uuidv4'

function App() {
  const [products, setProducts] = useState([]);
  const productNameRef = useRef();

  function handleAddProduct(e) {
    const name = productNameRef.current.value;
    if (name === '') return;
    setProducts(prevProducts => {
      return [...prevProducts, { id: uuidv4(), name: name, complete: false }]
    })
    productNameRef.current.value = null;

  }

  return (
    <>
      <ToBuyList productList={products} />
      <input ref={productNameRef} type="text" />
      <button onClick={handleAddProduct}>Add product</button>
      <button>Clear completed products</button>
      <div>0 products left to buy</div>
    </>
  );
}

export default App;
