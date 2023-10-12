import { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "./../../Data/Logo/Logo.png";
import "./MainMenu.scss";
import Brands from "./../../components/Brands/Brand.json";
import Categories from "../Categories/Categories.json";
import DarkMode from "../DarkMode/DarkMode";

import { IoMdSearch } from "react-icons/io";

function MainMenu() {
  const [fItem, setFItem] = useState("");

  return (
    <Navbar expand="lg" className="bg-body-tertiary box">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" className=" " />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 main-menu bg-body-tertiary"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Navbar.Brand href="/">
              <img src={Logo} alt="Logo" className="Logo" />
            </Navbar.Brand>
            <Nav.Link href="/">
              <span className="menu">HOME</span>
            </Nav.Link>
            <Nav.Link href="/gallery">
              <span className="menu">GALLERY</span>
            </Nav.Link>

            <NavDropdown
              title="CATEGORIES"
              id="navbarScrollingDropdown"
              className="menu"
            >
              {Categories.map((item) => (
                <NavDropdown.Item
                  key={item.id}
                  href={`/categories/${item.name}`}
                >
                  {item.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <div className="menu">
              <NavDropdown title="BRANDS" id="navbarScrollingDropdown">
                {Brands.map((item) => (
                  <NavDropdown.Item key={item.id} href={`/brand/${item.name}`}>
                    {item.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </div>

            <Nav.Link as={Link} to={"/compare"}>
              <div>
                <span className="menu">COMPARE</span>
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to={"/contact-us"}>
              <span className="menu">CONTACT US</span>
            </Nav.Link>
            <Nav.Link as={Link} to={"/about-us"}>
              <span className="menu">ABOUT US</span>
            </Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={fItem}
              onChange={(e) => setFItem(e.target.value)}
            />
            <Link to={`/search/${fItem}`}>
              <Button variant="outline-success">
                <IoMdSearch className="search-icon" />
              </Button>
            </Link>
          </Form>

          <div className="DarkMode">
            <DarkMode />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainMenu;
