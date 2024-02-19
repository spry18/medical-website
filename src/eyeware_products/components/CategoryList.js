// CategoryList.js
import React from 'react';
import '../products.css';

const CategoryList = ({ categories }) => {
    return (
        <div className="category-list">
            <div className="card">
                <div className='card2'>
                    <span className="title">Category</span>
                    <ul>
                        {categories.map(category => (
                            <li key={category.id}>{category.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;
