import React from "react";
import { Button } from "react-bootstrap";
import './../Gallery.scss'

function Category({ categories, filterItems }) {
  return (
    <div className="category">
      {categories.map((category, index) => (
        <Button
          key={index}
          variant="primary"
          className="mt-3 ml-3 but"
          onClick={() => filterItems(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}

export default Category;
