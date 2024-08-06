import React, { useState } from 'react';
import ProductList from './component/ProductList';
import Cart from './component/Cart';

function App(){
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(items => items.id !== product.id));
  };

  return(
    <div>
      <h1>
        Simple E-commerce Application
      </h1>
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />

    </div>
  );

}

export default App;