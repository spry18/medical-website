//ProductCatalog.js
import React from 'react';
import CategoryList from './CategoryList';
import { categories } from '../data/data';
import '../products.css';
import Header from './Header';

const Catalog = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <CategoryList categories={categories} />
                    </div>
                    <div className="col-md-9">
                        List of Products
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
