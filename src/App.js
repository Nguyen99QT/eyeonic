import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MainMenu from "./components/MainMenu/MainMenu";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact_Us/ContactUs";
import Home from "./components/Home/Home";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";
import BrandProduct from "./components/Products/BrandProduct/BrandProduct";
import CategoriesProduct from "./components/Products/CategoriesProduct/CategoriesProduct";
import AboutUs from "./components/AboutUs";
import Product from "./components/Products/Product";
import Gallery from "./components/Gallery/Gallery";
import Search from "./components/Products/Search/Search";
import ProductNotFound from "./components/Products/Product/index";


function App() {
  
  return (
    <div className="all">
      <Container fluid="md">
        <Row>
          <Col>            
            <MainMenu />
          </Col>
        </Row>
        <Row>
          <Col>
            <Routes>
              <Route path="/main-content" element={<MainContent />} />
              <Route path="/" element={<Home />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/detail/:id" element={<ProductDetail />} />
              <Route path="/brand/:name" element={<BrandProduct />} />
              <Route path="/categories/:name" element={<CategoriesProduct />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/compare" element={<Product />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/search/:fItem" element={<Search />} />
              <Route path="*" element={<ProductNotFound />} />
            </Routes>
          </Col>
        </Row>

        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
