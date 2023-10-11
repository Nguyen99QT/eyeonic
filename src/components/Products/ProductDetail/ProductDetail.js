import { Col, Container, Row, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Product from "./../Product.json";
import { useParams } from "react-router-dom";
import "./ProductDetail.scss";

import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGeoAltFill } from "react-icons/bs";

import Scroll from '../../ScrollToTop/ScrollToTop'

function ProductDetail() {
  const { id } = useParams();
  let item = Product.filter((item) => item.Img.ID === id);
  console.log("item", item);
  item = item[0];
  return (
    <Container>
      <Scroll/>
      <Row>
        <Col sm={12} md={6}>
          <img src={item.Img.Src.img1} alt={item.Img.ID} width="100%" />
          <img src={item.Img.Src.img2} alt={item.Img.ID} width="50%" />
          <img src={item.Img.Src.img3} alt={item.Img.ID} width="50%" />
        </Col>
        <Col sm={12} md={6}>
          <div className="item-info mt-5 ">
            <h2>
              <span className="title">
                {item.Img.Color} {item.Img.ID}
              </span>
            </h2>
            <p className="info">
              <span className="sub-title">Grand: </span>
              {item.Img.Brand.Name}
            </p>
            <p className="info">
              <span className="sub-title">Type: </span>
              {item.Img.Type.name}
            </p>
            <p className="info">
              <span className="sub-title">Year: </span>
              {item.Img.Year}
            </p>
            <p className="info">
              <span className="sub-title">Gender: </span>
              {item.Img.Gender}
            </p>
            <p className="info">
              <span className="sub-title">Price:</span>$ {item.Img.Price}
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Tabs
          defaultActiveKey="detail"
          id="uncontrolled-tab-example"
          className="mb-3 mt-3"
        >
          <Tab eventKey="detail" title="Description" className="description">
            <p>{item.Img.Detail.d1}</p>
            <p>{item.Img.Detail.d2}</p>
            <p>{item.Img.Detail.d3}</p>
          </Tab>
          <Tab eventKey="download" title="Download">
            <label>
              <h3>More information</h3>
              <Button href={item.Img.Word}>Download</Button>
            </label>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <p>
              <span className="contactTitle">
                <MdEmail className="icon Mail" />
                Email:
              </span>{" "}
              <a href="mailto:eyeonicsupport@gmail.com">
                eyeonicsupport@gmail.com
              </a>
            </p>
            <p>
              <span className="contactTitle">
                <BsFillTelephoneFill className="icon Telephone" />
                Tel:{" "}
              </span>
              <a href="tel:123456789">123456789</a>
            </p>
            <p>
              <span className="contactTitle">
                <BsGeoAltFill className="icon location" />
                Location:{" "}
              </span>
              590, CMT8, Ward 11, District 3, Ho Chi Minh City, Viet Nam.
            </p>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
}

export default ProductDetail;
