import { Link } from "react-router-dom";
import Products from "../Product.json";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Card, Button, Alert } from "react-bootstrap";

import "./../Product.scss";

import glasses from "./../../../assets/Images/bannerList/Glasses_Banner.webp";
import sunglasses from "./../../../assets/Images/bannerList/SunGlasses_Banner.jpg";
import lenses from "./../../../assets/Images/bannerList/Contact_lens_banner.png";

function GalleryProduct() {
  const { name } = useParams();
  let item = Products.filter((item) => item.Img.Type.name === name);
  console.log("item", item);
  let B = Products.filter((B) => B.Img.Type.name === name);
  B = B[0];
  return (
    <Container>
      {B == null && (
        <Alert variant="danger">
          <h3>This brand will be update in near future</h3>
        </Alert>
      )}
      {B != null && (
        <Row className="text-center mt-5">
          <h1>{B.Img.Type.name}</h1>
          <img
            src={
              B.Img.Type.name === "GLASSES"
                ? glasses
                : B.Img.Type.name === "SUNGLASSES"
                ? sunglasses
                : lenses
            }
            alt=""
          />
        </Row>
      )}
      <Row className="mt-3 ">
        {item.map((item) => (
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
    </Container>
  );
}

export default GalleryProduct;
