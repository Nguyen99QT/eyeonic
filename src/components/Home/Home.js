import LiveShow from "../Live-show/Live_show";
import { Row, Col, Container } from "react-bootstrap";

import "./Home.scss";

import Logo_Gucci from "../../assets/Images/LOGO/Logo_gucci.jpg";
import Logo_Rayban from "../../assets/Images/LOGO/Logo_Rayban.png";
import Logo_Burberry from "../../assets/Images/LOGO/Burberry-Logo.png";
import Logo_Oakley from "../../assets/Images/LOGO/Oakley_logo.png";
import Logo_BossHugo from "../../assets/Images/LOGO/Hugo-Boss-logo_0.jpg";
import ProductBestSell from "../Products/ProductBestSell/ProductBestSell";


import PicBanner from "./picBanner/PicBanner";

function Home() {
  return (
    <Container>
      <Row className="live-show">
        <Col>
          <LiveShow />
        </Col>
      </Row>
      <Row className="mt-3">
        <ProductBestSell />
      </Row>

      <PicBanner/>

      <Row className="mt-5 brand-live">
        <h1>Enjoy our premium brands</h1>
      </Row>
      <Row className="mt-3 Brand_logo">
        <Col sm={6} md={4}>
          <a href="/brand/Gucci">
            <img src={Logo_Gucci} alt="Logo_gucci" className="m-5 Logo_Brand" />
          </a>
        </Col>
        <Col sm={6} md={4}>
          <a href="/brand/Ray-Ban"><img src={Logo_Rayban} alt="Logo_Rayban" className="Logo_Brand" /> </a>
          
        </Col>
        <Col sm={6} md={4}>
          <a href="/brand/Burberry"><img src={Logo_Burberry} alt="Logo_Burberry" className="Logo_Brand" /></a>
          
        </Col>
        <Col sm={6} md={4}>
          <a href="/brand/Oakley"><img src={Logo_Oakley} alt="Logo_Oakley" className="Logo_Brand" /></a>
          
        </Col>
        <Col sm={6} md={4}>
          <a href="/brand/Hugo Boss"><img src={Logo_BossHugo} alt="Logo_BossHugo" className="Logo_Brand" /></a>
          
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
