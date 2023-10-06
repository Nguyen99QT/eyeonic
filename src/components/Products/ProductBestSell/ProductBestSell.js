import { Link } from "react-router-dom";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

import Products from "./../Product.json";
import "./ProductBestSell.scss";

function ProductBestSell() {
  let BestSell = Products.filter((item) => item.Img.Sell === "1");
  return (
    <Container>
      <Row className="mt-3 ">
        <h2 className="main-title">BEST SELL THIS WEEK</h2>
        {BestSell.map((item) => (
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

export default ProductBestSell;
