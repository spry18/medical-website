// Breadcrumbs.js
import React from 'react';
import '../products.css';

const Breadcrumbs = ({ crumbs }) => {
    return (
        <div className="breadcrumbs">
            Breadcrumbs: {crumbs.join(' > ')}
        </div>
    );
};

export default Breadcrumbs;
