import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Category from "./Category/Category";
import GalleryItem from "./GalleryItem/GalleryItem";
import items from "../Products/Product.json";

import "./Gallery.scss";

const allCategories = [
  "All",
  ...new Set(items.map((item) => item.Img.Type.name)),
];

function Gallery() {
  const [galleryItems, setGalleryItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  function handleFilterItems(category) {
    if (category === "All") {
      setGalleryItems(items);
      return;
    }
    const newItems = items.filter((item) => item.Img.Type.name === category);
    setGalleryItems(newItems);
  }
  return (
    <Container>
      <div className="gallery">
        <Col>
          <h1 className="title">Gallery Products</h1>        
        </Col>
      </div>
      <Row>
        <Col>
          <Category categories={categories} filterItems={handleFilterItems} />
        </Col>
      </Row>
      <Row>
        <Col>
          <GalleryItem items={galleryItems} />
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
