// ProductList.js
import React from 'react';
import '../products.css';

const ProductList = ({ products }) => {
    return (
        <div className='product-list'>
            <h2>Products</h2>
            <ul className='product-list-container'>
                {products.map(product => (
                    <li key={product.id} className='product-item'>
                        <img src={product.image} alt={product.name} />
                        <p>{product.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
