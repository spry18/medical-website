// CategorySearch.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList } from '@fortawesome/free-solid-svg-icons';
import '../products.css';

const CategorySearch = () => {

    const [view, setView] = useState('grid');

    const handleGridViewClick = () => {
        setView('grid');
    };

    const handleListViewClick = () => {
        setView('list');
    };

    return (
        <div className="category-search">
            <input type="text" placeholder="Search categories..." />

            <div className="view-options">
                <span onClick={handleGridViewClick}>
                    <FontAwesomeIcon icon={faTh} className={view === 'grid' ? 'active' : ''} />
                </span>
                <span onClick={handleListViewClick}>
                    <FontAwesomeIcon icon={faList} className={view === 'list' ? 'active' : ''} />
                </span>
            </div>

            <div className="filter-options">
                {/* Add your filter options here */}
                <select>
                    <option value="">Filter by...</option>
                    <option value="price">Price(a-z)</option>
                    <option value="price">Price(z-a)</option>
                    <option value="price">Price(lowest)</option>
                    <option value="price">Price(highest)</option>
                </select>
            </div>
        </div>
    );
};

export default CategorySearch;
