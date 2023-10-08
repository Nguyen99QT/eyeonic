import "./Search.scss";
import Products from "./../Product.json";
//import { useState } from "react";
import { Col, Container, Row, Card, Button, Alert } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Search() {
  const { fItem } = useParams();
  console.log(fItem);

  // const [searchParam] = useState(["Color", "ID"]);

  // let items = Products.filter((item) => {
  //   return searchParam.some((newItem) => {
  //     return (
  //       item[newItem].toString().toLowerCase().indexOf(fItem.toLowerCase()) > -1
  //     );
  //   });
  // });
  let items = Products.filter((item) => {
    if (fItem === "") {
      return item;
    } else if (
      item.Img.Color.toLowerCase().includes(fItem.toLocaleLowerCase())
    ) {
      return item;
    } else if (item.Img.ID.toLowerCase().includes(fItem.toLocaleLowerCase())) {
      return item;
    } else if (
      item.Img.Brand.Name.toLowerCase().includes(fItem.toLocaleLowerCase())
    ) {
      return item;
    }
    else if (
      item.Img.Type.name.toLowerCase().includes(fItem.toLocaleLowerCase())
    ) {
      return item;
    }
  });

  return (
    <Container>
      {items.length === 0 && (
        <Row className="mt-5 mb-5">
          <Alert variant="danger">
            <h3>No suitable product found</h3>
          </Alert>
        </Row>
      )}

      <Row className="mt-3 ">
        {items.map((item) => (
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

export default Search;
