import { Col, Row } from "react-bootstrap";
import './../Home.scss'

import pic1 from "./img/pic1.avif";
import pic2 from "./img/pic2.avif";
import pic3 from "./img/pic3.avif";
import pic4 from "./img/pic4.avif";
import pic5 from "./img/pic5.avif";
import pic6 from "./img/pic6.avif";

function PicBanner() {
  return (
    <Row className="mt-5">
        
      <Col xs={12} sm={6} md={4}>
        <img src={pic1} alt="beautiful glasses" className="pic-banner"/>
      </Col>
      <Col xs={12} sm={6} md={4}>
        <img src={pic2} alt="beautiful glasses" className="pic-banner"/>
      </Col>
      <Col xs={12} sm={6} md={4}>
        <img src={pic3} alt="beautiful glasses" className="pic-banner"/>
      </Col>
      <Col xs={12} sm={6} md={4}>
        <img src={pic4} alt="beautiful glasses" className="pic-banner"/>
      </Col>
      <Col xs={12} sm={6} md={4}>
        <img src={pic5} alt="beautiful glasses" className="pic-banner"/>
      </Col>
      <Col xs={12} sm={6} md={4}>
        <img src={pic6} alt="beautiful glasses" className="pic-banner"/>
      </Col>
      
    </Row>
  );
}

export default PicBanner;
