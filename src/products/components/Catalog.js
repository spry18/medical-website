//Catalog.js
import React from 'react';
import Header from './Header';
import Breadcrumbs from './Breadcrumbs';
import CategoryFilter from './CategoryFilter';
import ProductList from './ProductList';
import CategorySearch from './CategorySearch';
import { crumbs, categories, products } from '../data/data'; // Import the variables
import '../products.css';

const Catalog = () => {
    return (
        <div>
            <Header />
            <Breadcrumbs crumbs={crumbs} />
            <CategorySearch />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <CategoryFilter categories={categories} />
                    </div>
                    <div className="col-md-9">
                        <ProductList products={products} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
