import React from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  Modal,
  Nav,
  Navbar,
} from "react-bootstrap";

import logo from "../../images/logo.png";
import SearchNavBarLogic from "../../logic/Search/SearchNavBarLogic";
import HomeAllProductViewLogic from "../../logic/Products/HomeAllProductViewLogic";
import { useState } from "react";
import { useEffect } from "react";

const NavBarEl = () => {
  const [, onchangeSearch] = SearchNavBarLogic();
  const [, , , word] = HomeAllProductViewLogic();

  //

  const [user, setUser] = useState("");

  //

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  // Hndle Modal >>
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //
  const logOut = () => {
    localStorage.removeItem("user");
    setUser("");
    setShow(false);
    if (window.location.href !== "/") {
      window.location.href = "/";
    }
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Log Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do You Want To Log Out ?</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Back
          </Button>
          <Button variant="danger" onClick={logOut}>
            Log Out
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="nav-bar">
        <Container>
          <Navbar expand="lg" className="bg-body-tertiary navb">
            <Container fluid>
              <Navbar.Brand>
                <a href="/">
                  <img src={logo} alt="logo" />
                </a>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Form className="d-flex form">
                    <Form.Control
                      value={word}
                      onChange={onchangeSearch}
                      type="search"
                      placeholder="Search..."
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                  <div className="links-container">
                    {!user.name ? (
                      <Nav.Link href="/login">
                        <div>
                          <i class="fa-regular fa-circle-user"></i>
                          <span>Login</span>
                        </div>
                      </Nav.Link>
                    ) : (
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {user.name}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {user.role === "admin" ? (
                            <Dropdown.Item href="/admin/allproducts">
                              DashBord
                            </Dropdown.Item>
                          ) : (
                            <Dropdown.Item href="/user/profile">
                              Profile
                            </Dropdown.Item>
                          )}
                          <Dropdown.Item onClick={handleShow}>
                            log Out
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    )}
                    <Nav.Link href="/cart">
                      <div>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span>Cart</span>
                      </div>
                    </Nav.Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default NavBarEl;
