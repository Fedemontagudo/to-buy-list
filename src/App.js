import React, { useState, useRef } from 'react'
import ToBuyList from './ToBuyList'
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const productNameRef = useRef();

  function handleAddProduct(e) {
    const name = productNameRef.current.value
    if (name === '') return;
    console.log(name);
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
