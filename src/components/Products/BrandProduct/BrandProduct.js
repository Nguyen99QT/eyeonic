import { Link } from "react-router-dom";
import Products from "../Product.json";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Card, Button, Alert } from "react-bootstrap";
import "./../Product.scss";

import { useState } from "react";
import Pagination from "../../Pagination/Pagination";

import RayBan from "../../../assets/Images/Banner_Brand/Ray-ban.jpg";
import Oakley from "../../../assets/Images/Banner_Brand/Oakley.jpg";
import HugoBoss from "../../../assets/Images/Banner_Brand/Hugo-boss.jpg";
import Burberry from "../../../assets/Images/Banner_Brand/Burberry.jpg";
import Gucci from "../../../assets/Images/Banner_Brand/Gucci.webp";

function BrandProduct() {
  const { name } = useParams();
  let item = Products.filter((item) => name === item.Img.Brand.Name);
  console.log("item", item);
  let B = Products.filter((B) => B.Img.Brand.Name === name);
  B = B[0];

  const PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const offSet = currentPage * PER_PAGE;
  const currentPageData = item.slice(offSet, offSet + PER_PAGE);
  const pageCount = Math.ceil(item.length / PER_PAGE);

  return (
    <Container>
      {B == null && (
        <Alert variant="danger">
          <h3>This brand will be update in the future</h3>
        </Alert>
      )}

      <Row className="text-center ">
        {/* {B != null && <h1>{B.Img.Brand.Name}</h1>} */}
        <img
          src={
            B.Img.Brand.Name === "Hugo Boss"
              ? HugoBoss
              : B.Img.Brand.Name === "Ray-Ban"
              ? RayBan
              : B.Img.Brand.Name === "Gucci"
              ? Gucci
              : B.Img.Brand.Name === "Oakley"
              ? Oakley
              : Burberry
          }
          alt=""
        />
      </Row>

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
      </Row>
      <Row>
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </Row>
    </Container>
  );
}

export default BrandProduct;
