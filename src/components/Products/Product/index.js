import { Link } from "react-router-dom";
import Products from "../Product.json";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import "./../Product.scss";

function index() {
  return (
    <Container>
      <Row className="text-center mt-5">
        <h1>Feature Products</h1>
      </Row>
      <Row className="mt-3 ">
        {Products.map((item) => (
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

export default index;
