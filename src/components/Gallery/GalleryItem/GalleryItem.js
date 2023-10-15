import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useState } from "react";
import Pagination from "../../Pagination/Pagination";

function GalleryItem({ items }) {
  const PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const offSet = currentPage * PER_PAGE;
  const currentPageData = items.slice(offSet, offSet + PER_PAGE);
  const pageCount = Math.ceil(items.length / PER_PAGE);
  return (
    <Row className="mt-3 ">
      {currentPageData.map((item) => (
        <Col xs={12} sm={6} md={4} lg={3} key={item.Img.ID}>
          <Card className="ml-3 mt-2 mb-3 product-card">
            <Card.Img variant="top" src={item.Img.Src.img1} />
            <Card.Body>
              <Card.Title>
                {item.Img.Color} {item.Img.ID}
              </Card.Title>

              <Card.Text>
                <h6>{item.Img.Brand.Name}</h6>
              </Card.Text>
              <Card.Text>
                <h5>$ {item.Img.Price}</h5>
              </Card.Text>
              <Link to={`/detail/${item.Img.ID}`}>
                <Button variant="primary">Detail...</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
      <Row>
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </Row>
    </Row>
  );
}

export default GalleryItem;
