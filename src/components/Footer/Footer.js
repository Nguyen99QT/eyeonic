import { Card, Col, Container, Row } from "react-bootstrap";
import "./Footer.scss";
import {
  LiaTruckSolid,
  LiaRulerHorizontalSolid,
  LiaShoppingBagSolid,
  LiaFacebook,
} from "react-icons/lia";
import { ImHeadphones, ImYoutube, ImTwitter } from "react-icons/im";
import ins from "../../Data/Logo/ins-icon.png";

import Brands from "./../Brands/Brand.json";
import Categories from "./../Categories/Categories.json";

function Footer() {
  return (
    <Container className="mt-3">
      <Row className="footer-service">
        <Col xs={12} sm={6} lg={3}>
          <Card className="service">
            <LiaTruckSolid className="service-icon" />
            <h5 className="card-title">SHIPPING</h5>
            <p>
              We use logistics partners who employ sustainable solution to
              reduce climate impact.
            </p>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <Card className="service">
            <LiaShoppingBagSolid className="service-icon" />
            <h5 className="card-title">COLLECT IN STORE</h5>
            <p>
              Shop online and collect at one of the 1000+ LensCrafters stores.
            </p>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <Card className="service">
            <LiaRulerHorizontalSolid className="service-icon" />
            <h5 className="card-title">FITTING AND ADJUSTMENT</h5>
            <p>
              Premium services, such as free fittings and adjustments, available
              in all LensCrafters stores.
            </p>
          </Card>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <Card className="service">
            <ImHeadphones className="service-icon" />
            <h5 className="card-title">CUSTOMER SERVICE</h5>
            <p>
              Our customer service is always to help with any questions via
              chat, email, or social media channels.
            </p>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5 d-flex justify-content-around">
        <Col xs={12} sm={6} md={4} lg={3} >
          <div className="about-box">
          <h4 className="f-title">About</h4>
          <ul className="footer-about">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About us</a>
            </li>
            <li>
              <a href="/compare">Comparison</a>
            </li>
            <li>
              <a href="/contact-us">Contact</a>
            </li>
          </ul>
          </div>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3} className="footer-about">
          <div className="about-box">
          <h4 className="f-title">Brands</h4>
          <ul className="footer-about">
            {Brands.map((items, index) => (
              <li key={index}>
                <a href={`/brand/${items.name}`}>{items.name}</a>
              </li>
            ))}
          </ul>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="footer-about">
          <div className="about-box">
          <h4 className="f-title">Categories</h4>
          <ul className="footer-about">
            {Categories.map((items, index) => (
              <li key={index}>
                <a href={`/categories/${items.name}`}>{items.name}</a>
              </li>
            ))}
          </ul>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} >
          <h4 className="social-title mt-sm-5">Socialize with us</h4>
          <Row className="service-social-com">
            <Col className="service-social">
              <a href="https://www.facebook.com/" title="facebook">
                <LiaFacebook className="service-social-icon" />
              </a>
            </Col>
            <Col className="service-social">
              <a href="https://www.youtube.com/" title="YouTube">
                <ImYoutube className="service-social-icon-y" />
              </a>
            </Col>
            <Col className="service-social">
              <a href="https://www.twitter.com/" title="Twitter" f>
                <ImTwitter className="service-social-icon-t " />
              </a>
            </Col>
            <Col className="service-social">
              <a href="https://www.instagram.com/" title="Instagram">
                <img
                  src={ins}
                  alt="Instagram"
                  className="service-social-icon"
                />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="footer-last mb-sm-5">
        <h2 >EYEONIC</h2>
        <p>Copyright &copy; by EYEONIC 2023</p>
      </div>
    </Container>
  );
}

export default Footer;
