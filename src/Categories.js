import React from 'react';

const Categories = ({ categories, filterItems, activeCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          type="button"
          className={`${
            activeCategory === category.name ? 'filter-btn active' : 'filter-btn'
          }`}
          key={index}
          onClick={() => filterItems(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;

