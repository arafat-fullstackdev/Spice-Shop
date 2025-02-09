import React from 'react';

function Cart({ cartItems, removeFromCart }){
     const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

     return(
        <div>
        <h2>Cart</h2>
          <ul>
            {cartItems.map((item, index) => (
                <li key={index}>
                    {item.name} - ${item.price}
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                </li>
            ))}
          </ul>
          <h3>Total: ${totalAmount}</h3>
        </div>
     );
}

export default Cart;