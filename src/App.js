import React, { useState, useRef, useEffect } from 'react'
import ToBuyList from './ToBuyList'
import logo from './lista.svg'
import { v4 } from 'uuid'

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
      return [...prevProducts, { id: v4(), name: name, complete: false }]
    })
    productNameRef.current.value = null;
  }

  function handleClearProduct() {
    const newProducts = products.filter(product => !product.complete);
    setProducts(newProducts);

  }

  return (
    <>
      <h1 className="título">LISTA DE LA COMPRA</h1>
      <img src={logo} className="AppLogo" alt="logo" />
      <div className="pizarra">
        <ToBuyList className="toBuyList" productList={products} toggleProduct={toggleProduct} />
      </div>
      <input className="inputMenu" ref={productNameRef} type="text" />
      <div className="multiButton">
        <button className="addProduct" onClick={handleAddProduct}>Añadir Producto</button>
        <button className="deleteProducts" onClick={handleClearProduct}>Borrar seleccionado</button>
      </div>
      <div className="productsLeft">{products.filter(product => !product.complete).length} productos por comprar</div>
    </>
  );
}

export default App;
