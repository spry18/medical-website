// CategoryFilter.js
import React from 'react';
import '../products.css';

const CategoryFilter = ({ categories }) => {
    return (
        <div className="category-filter">
            <h2>Category</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryFilter;
