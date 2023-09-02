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
import Modal from 'react-bootstrap/Modal';
// import Collapse from 'react-bootstrap/Collapse';

export default function InquiryView() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ShowOrder, setShowOrder] = useState(false);

  const handleDeleteOrder = () => setShowOrder(false);
  const handleShowOrder = () => setShowOrder(true);



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
                  <Col xs={12}>
                    <div className="bredcrumb mb-12">
                      <Link
                        href="/inquiries"
                        className="text-primary  text-decoration-none"
                      >
                        Inquiries {">"}
                      </Link>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="page-heading">
                      <h2>Inquiry View</h2>
                    </div>
                  </Col>
                  {/* <Col xs={5}>
                    <InputGroup className="justify-content-md-end header-btn-group">
                    <Link href="/stock" className="btn btn-primary add-btn">
         
                        Save
                      </Link>
                    </InputGroup>
                  </Col> */}
                </Row>

                <Row>
                  <Col md={12} className="mb-24">
                    <div className="card-column custom-card pb-0">
                      <Form>
                        <Row>
                          <Col md={4}>
                            <Form.Group
                              className="mb-24"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="custom-label">
                                Inquiry ID
                                {/* <span className="text-primary">*</span> */}
                              </Form.Label>
                              <Form.Control
                                type="text"
                                disabled
                                placeholder="Inquiry ID"
                              />
                            </Form.Group>
                          </Col >
                          <Col md={4}>
                            <Form.Group
                              className="mb-24"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="custom-label">
                                Date
                              </Form.Label>
                              <Form.Control
                                type="date"
                                disabled
                                placeholder="Shape Name"
                              />
                            </Form.Group>
                          </Col >
                          <Col md={4}>
                            <Form.Group
                              className="mb-24"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="custom-label">
                                Customer Name
                              </Form.Label>

                              <Form.Select
                                className="form-control"
                                disabled
                                aria-label="Default select example"
                              >
                                <option>Select one</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Form.Group>
                          </Col >
                        </Row>

                        <div className="table-responsive">
                          <div className="display-table">
                            <div className="table-row">
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label className="custom-label">
                                    S No
                                    {/* <span className="text-primary">*</span> */}
                                  </Form.Label>
                                  <Form.Label className="custom-label d-block text-dark">
                                    <span className="sr-no-text"></span>
                                    1.
                                    {/* <span className="text-primary">*</span> */}
                                  </Form.Label>
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label className="custom-label">
                                    Stone
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    disabled
                                    value={"Emerald"}
                                    placeholder="Stone"
                                  />
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label className="custom-label">
                                    Shape
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    disabled
                                    value={"Square"}
                                    placeholder="Shape"
                                  />
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <InputGroup className="mb-24 align-items-start flex-column mb-24">
                                  <div className="flex-grow-1">
                                    <Form.Label className="custom-label">
                                      Length
                                    </Form.Label>
                                  </div>
                                  <div className="d-flex input-gap-group align-items-stretch flex-wrap w-100">
                                    <Form.Group
                                      className="from-to-col"
                                      
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        value={"11"}
                                        disabled
                                        placeholder="From"
                                      />
                                    </Form.Group>
                                    <Form.Group
                                      className="from-to-col "
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        disabled
                                        value={"12"}
                                        placeholder="To"
                                      />
                                    </Form.Group>
                                  </div>
                                </InputGroup>
                              </div>
                              <div className="table-cell">
                                <InputGroup className="mb-24 align-items-start flex-column mb-24">
                                  <div className="flex-grow-1">
                                    <Form.Label className="custom-label">
                                      width
                                    </Form.Label>
                                  </div>
                                  <div className="d-flex input-gap-group align-items-stretch flex-wrap w-100">
                                    <Form.Group
                                      className="from-to-col"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        value={"15"}
                                        disabled
                                        placeholder="From"
                                      />
                                    </Form.Group>
                                    <Form.Group
                                      className="from-to-col "
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        disabled
                                        value={"17"}
                                        placeholder="To"
                                      />
                                    </Form.Group>
                                  </div>
                                </InputGroup>
                              </div>
                              <div className="table-cell">
                                <InputGroup className="mb-24 align-items-start flex-column mb-24">
                                  <div className="flex-grow-1">
                                    <Form.Label className="custom-label">
                                      Height
                                    </Form.Label>
                                  </div>
                                  <div className="d-flex input-gap-group align-items-stretch flex-wrap w-100">
                                    <Form.Group
                                      className="from-to-col"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        disabled
                                        value={"7"}
                                        placeholder="From"
                                      />
                                    </Form.Group>
                                    <Form.Group
                                      className="from-to-col "
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        disabled
                                        value={"9"}
                                        placeholder="To"
                                      />
                                    </Form.Group>
                                  </div>
                                </InputGroup>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label className="custom-label">
                                    Carat Weight
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    value={"50"}
                                    disabled
                                    placeholder="Carat Weight"
                                  />
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label className="custom-label">
                                    Pieces
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    value={"15"}
                                    disabled
                                    placeholder="Pieces"
                                  />
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label className="custom-label">
                                    Budget/Quality
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    value={"4000"}
                                    disabled
                                    placeholder="Budget/Quality"
                                  />
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label className="custom-label">
                                    Proposed Price
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    disabled
                                    value={"6000"}
                                    placeholder="Proposed Price"
                                  />
                                </Form.Group>
                              </div>
                            </div>
                            <div className="table-row">
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  
                                  <Form.Label className="custom-label d-block text-dark">
                                    <span className="sr-no-text"></span>
                                    2.
                                    {/* <span className="text-primary">*</span> */}
                                  </Form.Label>
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                 
                                  <Form.Control
                                    type="text"
                                    disabled
                                    value={"Emerald"}
                                    placeholder="Stone"
                                  />
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                 
                                  <Form.Control
                                    type="text"
                                    disabled
                                    value={"Square"}
                                    placeholder="Shape"
                                  />
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <InputGroup className="mb-24 align-items-start flex-column mb-24">
                                  <div className="flex-grow-1">
                                  
                                  </div>
                                  <div className="d-flex input-gap-group align-items-stretch flex-wrap w-100">
                                    <Form.Group
                                      className="from-to-col"
                                      
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        value={"11"}
                                        disabled
                                        placeholder="From"
                                      />
                                    </Form.Group>
                                    <Form.Group
                                      className="from-to-col d-none"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        disabled
                                        value={"12"}
                                        placeholder="To"
                                      />
                                    </Form.Group>
                                  </div>
                                </InputGroup>
                              </div>
                              <div className="table-cell">
                                <InputGroup className="mb-24 align-items-start flex-column mb-24">
                                  <div className="flex-grow-1">
                                   
                                  </div>
                                  <div className="d-flex input-gap-group align-items-stretch flex-wrap w-100">
                                    <Form.Group
                                      className="from-to-col"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        value={"15"}
                                        disabled
                                        placeholder="From"
                                      />
                                    </Form.Group>
                                    <Form.Group
                                      className="from-to-col d-none "
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        disabled
                                        value={"17"}
                                        placeholder="To"
                                      />
                                    </Form.Group>
                                  </div>
                                </InputGroup>
                              </div>
                              <div className="table-cell">
                                <InputGroup className="mb-24 align-items-start flex-column mb-24">
                                  <div className="flex-grow-1">
                                  
                                  </div>
                                  <div className="d-flex input-gap-group align-items-stretch flex-wrap w-100">
                                    <Form.Group
                                      className="from-to-col"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        disabled
                                        value={"7"}
                                        placeholder="From"
                                      />
                                    </Form.Group>
                                    <Form.Group
                                      className="from-to-col d-none "
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        disabled
                                        value={"9"}
                                        placeholder="To"
                                      />
                                    </Form.Group>
                                  </div>
                                </InputGroup>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  
                                  <Form.Control
                                    type="text"
                                    value={"50"}
                                    disabled
                                    placeholder="Carat Weight"
                                  />
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                
                                  <Form.Control
                                    type="text"
                                    value={"15"}
                                    disabled
                                    placeholder="Pieces"
                                  />
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                 
                                  <Form.Control
                                    type="text"
                                    value={"4000"}
                                    disabled
                                    placeholder="Budget/Quality"
                                  />
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  
                                  <Form.Control
                                    type="text"
                                    disabled
                                    value={"6000"}
                                    placeholder="Proposed Price"
                                  />
                                </Form.Group>
                              </div>
                            </div>
                            <div className="table-row">
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  
                                  <Form.Label className="custom-label d-block text-dark">
                                    <span className="sr-no-text"></span>
                                    3.
                                    {/* <span className="text-primary">*</span> */}
                                  </Form.Label>
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                 
                                  <Form.Control
                                    type="text"
                                    disabled
                                    value={"Emerald"}
                                    placeholder="Stone"
                                  />
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                 
                                  <Form.Control
                                    type="text"
                                    disabled
                                    value={"Square"}
                                    placeholder="Shape"
                                  />
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <InputGroup className="mb-24 align-items-start flex-column mb-24">
                                  <div className="flex-grow-1">
                                  
                                  </div>
                                  <div className="d-flex input-gap-group align-items-stretch flex-wrap w-100">
                                    <Form.Group
                                      className="from-to-col"
                                      
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        value={"11"}
                                        disabled
                                        placeholder="From"
                                      />
                                    </Form.Group>
                                    <Form.Group
                                      className="from-to-col "
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        disabled
                                        value={"12"}
                                        placeholder="To"
                                      />
                                    </Form.Group>
                                  </div>
                                </InputGroup>
                              </div>
                              <div className="table-cell">
                                <InputGroup className="mb-24 align-items-start flex-column mb-24">
                                  <div className="flex-grow-1">
                                   
                                  </div>
                                  <div className="d-flex input-gap-group align-items-stretch flex-wrap w-100">
                                    <Form.Group
                                      className="from-to-col"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        value={"15"}
                                        disabled
                                        placeholder="From"
                                      />
                                    </Form.Group>
                                    <Form.Group
                                      className="from-to-col  "
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        disabled
                                        value={"17"}
                                        placeholder="To"
                                      />
                                    </Form.Group>
                                  </div>
                                </InputGroup>
                              </div>
                              <div className="table-cell">
                                <InputGroup className="mb-24 align-items-start flex-column mb-24">
                                  <div className="flex-grow-1">
                                  
                                  </div>
                                  <div className="d-flex input-gap-group align-items-stretch flex-wrap w-100">
                                    <Form.Group
                                      className="from-to-col"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        disabled
                                        value={"7"}
                                        placeholder="From"
                                      />
                                    </Form.Group>
                                    <Form.Group
                                      className="from-to-col  "
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Control
                                        type="text"
                                        disabled
                                        value={"9"}
                                        placeholder="To"
                                      />
                                    </Form.Group>
                                  </div>
                                </InputGroup>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  
                                  <Form.Control
                                    type="text"
                                    value={"50"}
                                    disabled
                                    placeholder="Carat Weight"
                                  />
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                
                                  <Form.Control
                                    type="text"
                                    value={"15"}
                                    disabled
                                    placeholder="Pieces"
                                  />
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                 
                                  <Form.Control
                                    type="text"
                                    value={"4000"}
                                    disabled
                                    placeholder="Budget/Quality"
                                  />
                                </Form.Group>
                              </div>
                              <div className="table-cell">
                                <Form.Group
                                  className="mb-24"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  
                                  <Form.Control
                                    type="text"
                                    disabled
                                
                                    
                                  />
                                </Form.Group>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </Col>
                  <Col xs={12} >
                    <div className="d-flex  flex-wap align-items-center add-btn-row">
                    {/* <Button variant="link" className="text-primary p-0 text-decoration-none add-row-text">+ Add row</Button> */}
                    <Link href="#"  onClick={handleShowOrder} className="add-btn add-btn-custom btn btn-success " >Convert to Order</Link>
                    <Link href="/edit-inquiry-details" className="add-btn add-btn-custom btn btn-primary" >Edit</Link>

                
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="pagination-column pt-24">
            <Container fluid>
              <Row className=" align-items-center">
                <Col sm="4" lg="3">
                  <div className="text-center text-sm-start mb-2 mb-sm-0">
                    <p>Showing 11 from 120 products</p>
                  </div>
                </Col>
                <Col sm="8" lg="9">
                  <Pagination className="justify-content-sm-end justify-content-center">
                    {/* <Pagination.First /> */}
                    {/* <Pagination.Prev /> */}
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M11.5575 5.5575L10.5 4.5L6 9L10.5 13.5L11.5575 12.4425L8.1225 9L11.5575 5.5575Z"
                              fill="#13262F"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <Pagination.Item active>{1}</Pagination.Item>
                    {/* <Pagination.Ellipsis /> */}

                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Item>...</Pagination.Item>

                    {/* <Pagination.Ellipsis /> */}
                    <Pagination.Item>{12}</Pagination.Item>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M7.5 4.5L6.4425 5.5575L9.8775 9L6.4425 12.4425L7.5 13.5L12 9L7.5 4.5Z"
                              fill="#13262F"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>

                    {/* <Pagination.Last /> */}
                  </Pagination>
                </Col>
              </Row>
            </Container>
          </div>
        </main>
      </div>
   {/* stock-enter-delete-modal */}
   <Modal
        className="modal-custom"
        show={ShowOrder}
        onHide={handleDeleteOrder}
        centered
      >
        <Modal.Header className="opacity-0" closeButton>
          <Modal.Title>Emerald </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-30 pb-30">
          <div className="d-fex flex-column align-items-center justify-content-center text-center">
            <div className="page-heading">
              <h2>Enter The Proposed Price </h2>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="opacity-0">
          <Button
            variant="primary"
            className="add-btn  bg-primary-subtle me-12"
            onClick={handleDeleteOrder}
          >
            Cancel
          </Button>
          <Button variant="primary" className="add-btn" onClick={handleDeleteOrder}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      {/* stock-enter-delete-modal-close */}
    </div>
  );
}
