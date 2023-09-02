"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import InputGroup from "react-bootstrap/InputGroup";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Card from "react-bootstrap/Card";
import { TagsInput } from "react-tag-input-component";

// import Collapse from 'react-bootstrap/Collapse';

export default function ActivityTimeline() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selected, setSelected] = useState(["Emerald"]);
  const [selecteD, setSelecteD] = useState(["Round"]);

  return (
    <div className="page-layout">
      <Offcanvas
        className="left-offcanvas"
        
        show={show}
        onHide={handleClose}
        backdrop="static"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Tank Gemstones</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Accordion className="verticle-navbar">
            <Accordion.Item className="single-menu" eventKey="0">
              <Link href="/dashboard" className="text-decoration-none">
                <Accordion.Header>
                  <img
                    src="/images/dashboard-icon.svg"
                    className="img-fluid"
                    alt=""
                  />
                  Dashboard
                </Accordion.Header>
              </Link>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <img
                  src="/images/inventory-icon.svg"
                  className="img-fluid"
                  alt=""
                />
                Inventory
              </Accordion.Header>

              <Accordion.Body>
                <ul className="list-unstyled sub-menu-ul">
                  <li>
                    <Link href="/stock" className="nav-link sub-menu">
                      Stock
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories" className="nav-link sub-menu">
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/activity-timeline"
                      className="nav-link sub-menu"
                    >
                      {" "}
                      Activity Timeline
                    </Link>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <img
                  src="/images/inquires-orders.svg"
                  className="img-fluid"
                  alt=""
                />
                Inquires & Orders
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled sub-menu-ul">
                  <li>
                    <Link href="/inquiries" className="nav-link sub-menu">
                      Inquiries
                    </Link>
                  </li>
                  <li>
                    <Link href="/orders" className="nav-link sub-menu">
                      Orders
                    </Link>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="single-menu" eventKey="3">
              <Link href="/customers" className="text-decoration-none">
                <Accordion.Header>
                  <img
                    src="/images/customers-icon.svg"
                    className="img-fluid"
                    alt=""
                  />
                  Customers
                </Accordion.Header>
              </Link>
            </Accordion.Item>
            <Accordion.Item className="single-menu" eventKey="4">
              <Link href="/manufacturing" className="text-decoration-none">
                <Accordion.Header>
                  <img
                    src="/images/manufacturing-icon.svg"
                    className="img-fluid"
                    alt=""
                  />
                  Manufacturing
                </Accordion.Header>
              </Link>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <img
                  src="/images/invoicing-icon.svg"
                  className="img-fluid"
                  alt=""
                />
                Invoicing
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled sub-menu-ul">
                  <li>
                    <Link href="/purchases" className="nav-link sub-menu">
                      Purchases
                    </Link>
                  </li>
                  <li>
                    <Link href="/approvals" className="nav-link sub-menu">
                      Approvals
                    </Link>
                  </li>
                  <li>
                    <Link href="/sales" className="nav-link sub-menu">
                      Sales
                    </Link>
                  </li>
                  {/* <li>
            <Link href="#" className='nav-link sub-menu'>Consignments</Link> 
            </li> */}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <img
                  src="/images/company-settings-icon.svg"
                  className="img-fluid"
                  alt=""
                />
                Company Settings
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled sub-menu-ul">
                  <li>
                    <Link href="/company-info" className="nav-link sub-menu">
                      Company Info
                    </Link>
                  </li>
                  <li>
                    <Link href="/bank" className="nav-link sub-menu">
                      Bank
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/user-rights-management"
                      className="nav-link sub-menu"
                    >
                      User Rights Mgmt
                    </Link>
                  </li>
                  <li>
                    <Link href="/currency" className="nav-link sub-menu">
                      Currency
                    </Link>
                  </li>
                  <li>
                    <Link href="/users" className="nav-link sub-menu">
                      Users
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/account-settings"
                      className="nav-link sub-menu"
                    >
                      Account Settings
                    </Link>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="single-menu" eventKey="7">
              <Link href="/reports" className="text-decoration-none">
                <Accordion.Header>
                  <img
                    src="/images/reports-icon.svg"
                    className="img-fluid"
                    alt=""
                  />
                  Reports
                </Accordion.Header>
              </Link>
            </Accordion.Item>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="page-layout-right">
        <header>
          <Navbar expand="lg">
            <Container fluid>
              {/* <Button variant="primary" className='d-md-none' onClick={handleShow}>
        Toggle static offcanvas
      </Button> */}
              <Navbar.Toggle onClick={handleShow} />
              <Nav className="ms-auto">
                <Nav.Link href="#home">
                  {" "}
                  <Image
                    src="/images/profile-img.png"
                    className="profile-image"
                    fluid
                  />{" "}
                  John Doe
                </Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main className="page-content pb-0">
          <div className="stock-page page-common">
            <div className="page-header">
              <Container fluid>
                <Row className="mb-24 align-items-center align-items-md-start">
                  <Col sm={12}>
                    <div className="page-heading">
                      <h2>Activity Timeline</h2>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Form className="row">
                      <Col md={4}>
                        <Form.Group
                          className="mb-24"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="custom-label ">
                            Select From Date
                            {/* <span className="text-primary">*</span> */}
                          </Form.Label>
                          <Form.Control
                            className="height-42"
                            type="date"
                            placeholder="Category Name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group
                          className="mb-24"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="custom-label">
                            Select To Date
                            {/* <span className="text-primary">*</span> */}
                          </Form.Label>
                          <Form.Control
                            type="date"
                            className="height-42"
                            placeholder="Category Name"
                          />
                        </Form.Group>
                      </Col>
                    </Form>
                  </Col>
                </Row>

                <Row className="mb-24">
                  <Col md={12}>
                    <div className="table-responsive">
                      <div className="card-column custom-card">
                        <Accordion className="activity-time-column">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <span className="title">
                                SKU 12345644
                                <img
                                  src="/images/uil_arrows-merge.svg"
                                  className="img-fluid ms-12 me-12"
                                  alt=""
                                />
                                SKU 98765445
                              </span>
                              <span className="date">Fri, Jul 12, 2023</span>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="activity-body">
                                <h3 className="title-text text-primary">
                                  Before Merge:
                                </h3>
                                <ul className="ps-0 list-ul-column">
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Pieces: 450</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Pieces: 100</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>SKU: 123456789</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>SKU: 987654321</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Weight: 110</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Weight: 110</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Price: 8000</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Price: 8000</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Size:</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Size:</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                  </li>
                                </ul>
                                <hr />
                                <h3 className="title-text text-primary">
                                After Merge:
                                </h3>
                                <ul className="ps-0 list-ul-column">
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Pieces: 450</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Pieces: 100</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>SKU: 123456789</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>SKU: 987654321</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Weight: 110</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Weight: 110</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Price: 8000</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Price: 8000</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Size:</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Size:</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>
                              <span className="title">
                                SKU 12345644
                                <img
                                  src="/images/uil_arrows-merge.svg"
                                  className="img-fluid ms-12 me-12"
                                  alt=""
                                />
                                SKU 98765445
                              </span>
                              <span className="date">Fri, Jul 12, 2023</span>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="activity-body">
                                <h3 className="title-text text-primary">
                                  Before Merge:
                                </h3>
                                <ul className="ps-0 list-ul-column">
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Pieces: 450</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Pieces: 100</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>SKU: 123456789</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>SKU: 987654321</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Weight: 110</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Weight: 110</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Price: 8000</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Price: 8000</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Size:</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Size:</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                  </li>
                                </ul>
                                <hr />
                                <h3 className="title-text text-primary">
                                After Merge:
                                </h3>
                                <ul className="ps-0 list-ul-column">
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Pieces: 450</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Pieces: 100</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>SKU: 123456789</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>SKU: 987654321</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Weight: 110</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Weight: 110</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Price: 8000</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Price: 8000</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Size:</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Size:</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>
                              <span className="title">
                                SKU 12345644
                                <img
                                  src="/images/uil_arrows-merge.svg"
                                  className="img-fluid ms-12 me-12"
                                  alt=""
                                />
                                SKU 98765445
                              </span>
                              <span className="date">Fri, Jul 12, 2023</span>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="activity-body">
                                <h3 className="title-text text-primary">
                                  Before Merge:
                                </h3>
                                <ul className="ps-0 list-ul-column">
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Pieces: 450</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Pieces: 100</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>SKU: 123456789</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>SKU: 987654321</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Weight: 110</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Weight: 110</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Price: 8000</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Price: 8000</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Size:</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Size:</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                  </li>
                                </ul>
                                <hr />
                                <h3 className="title-text text-primary">
                                After Merge:
                                </h3>
                                <ul className="ps-0 list-ul-column">
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Pieces: 450</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Pieces: 100</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>SKU: 123456789</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>SKU: 987654321</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Weight: 110</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Weight: 110</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Price: 8000</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Price: 8000</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Size:</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Size:</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header>
                              <span className="title">
                                SKU 12345644
                                <img
                                  src="/images/uil_arrows-merge.svg"
                                  className="img-fluid ms-12 me-12"
                                  alt=""
                                />
                                SKU 98765445
                              </span>
                              <span className="date">Fri, Jul 12, 2023</span>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="activity-body">
                                <h3 className="title-text text-primary">
                                  Before Merge:
                                </h3>
                                <ul className="ps-0 list-ul-column">
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Pieces: 450</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Pieces: 100</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>SKU: 123456789</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>SKU: 987654321</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Weight: 110</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Weight: 110</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Price: 8000</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Price: 8000</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Size:</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Size:</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                  </li>
                                </ul>
                                <hr />
                                <h3 className="title-text text-primary">
                                After Merge:
                                </h3>
                                <ul className="ps-0 list-ul-column">
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Pieces: 450</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Pieces: 100</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>SKU: 123456789</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>SKU: 987654321</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Weight: 110</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Weight: 110</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Price: 8000</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Price: 8000</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Size:</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Size:</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4">
                            <Accordion.Header>
                              <span className="title">
                                SKU 12345644
                                <img
                                  src="/images/uil_arrows-merge.svg"
                                  className="img-fluid ms-12 me-12"
                                  alt=""
                                />
                                SKU 98765445
                              </span>
                              <span className="date">Fri, Jul 12, 2023</span>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="activity-body">
                                <h3 className="title-text text-primary">
                                  Before Merge:
                                </h3>
                                <ul className="ps-0 list-ul-column">
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Pieces: 450</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Pieces: 100</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>SKU: 123456789</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>SKU: 987654321</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Weight: 110</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Weight: 110</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Price: 8000</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Price: 8000</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Size:</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Size:</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                  </li>
                                </ul>
                                <hr />
                                <h3 className="title-text text-primary">
                                After Merge:
                                </h3>
                                <ul className="ps-0 list-ul-column">
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Pieces: 450</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Pieces: 100</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>SKU: 123456789</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>SKU: 987654321</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Weight: 110</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Weight: 110</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Price: 8000</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Price: 8000</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Shape: Oval</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4>Size:</h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4>Size:</h4>
                                    </div>
                                  </li>
                                  <li className="flex-container d-flex flex-warp align-items-center">
                                    <div className="flex-box flex-1">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                    <div className="flex-box flex-2">
                                      <h4 className="d-flex gap-flex">
                                        <span> Length: 11</span>
                                        <span>Width: 5</span>
                                        <span>Height: 8</span>
                                      </h4>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        
        </main>
      </div>
    </div>
  );
}
