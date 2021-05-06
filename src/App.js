import React, { useState, useRef, useEffect } from 'react'
import ToBuyList from './ToBuyList'
import './App.css';
import { uuid } from 'uuidv4'

const LOCAL_STORAGE_KEY = 'toBuyApp.product'

function App() {
  const [products, setProducts] = useState([]);
  const productNameRef = useRef();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedProducts) setProducts(storedProducts)
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products))
  }, [products]);


  function toggleProduct(id) {
    const newProducts = [...products];
    const product = newProducts.find(product => product.id === id);
    product.complete = !product.complete;
    setProducts(newProducts)
  }

  function handleAddProduct(e) {
    const name = productNameRef.current.value;
    if (name === '') return
    setProducts(prevProducts => {
      return [...prevProducts, { id: uuid(), name: name, complete: false }]
    })
    productNameRef.current.value = null;
  }

  function handleClearProduct() {
    const newProducts = products.filter(product => !product.complete);
    setProducts(newProducts);

  }

  return (
    <>
      <ToBuyList productList={products} toggleProduct={toggleProduct} />
      <input ref={productNameRef} type="text" />
      <button onClick={handleAddProduct}>Add product</button>
      <button onClick={handleClearProduct}> Clear completed products</button>
      <div>{products.filter(product => !product.complete).length} products left to buy</div>
    </>
  );
}

export default App;
