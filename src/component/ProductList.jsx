import React from 'react';

const products = [
    {id:1, name: 'Laptop', price:'1100'},
    {id:2, name: 'Ipad', price:'1340'},
    {id:3, name: 'SmartWatch', price:'600'},
];

function ProductList({ addToCart }) {
    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} -${product.price}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default ProductList;