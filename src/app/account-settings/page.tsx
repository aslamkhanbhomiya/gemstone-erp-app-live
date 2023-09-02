"use client";
// import { useState } from "react";
import React, { useState } from 'react';
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
import Tab from "react-bootstrap/Tab";
// Import React FilePond

// import Collapse from 'react-bootstrap/Collapse';

export default function AccountSettings() {
  // function handleChange(e) {
  //   console.log(e.target.files);
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // }

  // const [file, setFile] = useState<string | null>(null);

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //     if (e.target.files && e.target.files.length > 0) {
  //         const selectedFile = e.target.files[0];
  //         setFile(URL.createObjectURL(selectedFile));
  //     }
  // }
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [selected, setSelected] = useState(["Emerald"]);
  // const [selecteD, setSelecteD] = useState(["Round"]);
  // const [file, setFile] = useState();

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
                <Row className="mb-12 align-items-center align-items-md-start">
                  <Col sm="12">
                    <div className="page-heading">
                      <h2>Manage Setting</h2>
                    </div>
                  </Col>
                </Row>

                <Tab.Container
                  id="accoutSettings"
                  defaultActiveKey="AccountSettings"
                >
                  <Row>
                    <Col sm={12}>
                      <Nav variant="pills" className="mb-24 accoubt-tab-list">
                        <Nav.Item>
                        <Link href="/account-settings" className="nav-link active">
                          
                        Account Settings
                        
                        </Link>
                     
                        </Nav.Item>
                        <Nav.Item>
                          <Link href="/stones-and-shapes" className="nav-link">
                          
                            Stones & Shapes
                          
                          </Link>
                        </Nav.Item>
                      </Nav>
                    </Col>

                    <Col sm={12}>
              
                 <div>
                          <Form>
                            <div className="add-new-column mb-24">
                              {/* <h2 className="secondary-title mb-16">Basic details</h2> */}
                              <div className="card-column custom-card ">
                                <Row>
                                  <Col sm="12">
                                    <div className="mb-24">
                                      <div className="page-heading">
                                        <h2 className="mb-24 fw-medium">
                                          Account Settings
                                        </h2>
                                      </div>
                                      <h2 className="secondary-title mb-16 fw-medium">
                                        Reset Password
                                      </h2>
                                    </div>
                                  </Col>
                                  <Col sm="12">
                                    <Form.Group
                                      className="mb-24"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label className="custom-label">
                                        Current Password
                                      </Form.Label>
                                      <Form.Control
                                        type="password"
                                        placeholder=" Current Password"
                                      />
                                      {/* <Form.Select
                              className="form-control"
                              aria-label="Default select example"
                            >
                              <option>Select one</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select> */}
                                    </Form.Group>
                                  </Col>
                                  <Col sm="12">
                                    <Form.Group
                                      className="mb-24"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label className="custom-label">
                                        New Password
                                      </Form.Label>
                                      <Form.Control
                                        type="password"
                                        placeholder="New Password"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="12">
                                    <Form.Group
                                      className="mb-24"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label className="custom-label">
                                        Confirm Password
                                      </Form.Label>
                                      <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="12">
                                    <div className="image-uplode-preview mb-24">
                                      <h2 className="secondary-title mb-16 fw-medium">
                                        Profile Image Upload
                                      </h2>
                                      <div className="image-uplode-btn">
                                        {/* <img src={file} /> */}
                                        {/* <div className="file-input">
                                          <input
                                            type="file"
                                            className="form-control"
                                            onChange={handleChange}
                                          />
                                        </div> */}
                                      </div>
                                    </div>
                                  </Col>
                                  <Col>
                                    <h2 className="secondary-title mb-16 fw-medium">
                                      Edit Profile Details
                                    </h2>
                                  </Col>
                                  <Col sm="12">
                                    <Form.Group
                                      className="mb-24"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label className="custom-label">
                                        Username
                                      </Form.Label>
                                      <Form.Control
                                        type="password"
                                        placeholder="Username"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="12">
                                    <Form.Group
                                      className="mb-24"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label className="custom-label">
                                        Email Address
                                      </Form.Label>
                                      <Form.Control
                                        type="email"
                                        placeholder="Email Address"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="12">
                                    <Form.Group
                                      className="mb-24"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label className="custom-label">
                                        Select Preferred Time Zone
                                      </Form.Label>
                                      <Form.Select
                                        className="form-control"
                                        aria-label="Default select example"
                                      >
                                        <option>
                                          {" "}
                                          Select Preferred Time Zone
                                        </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </Col>
                                  <Col sm="12">
                                    <div>
                                      <div className="d-flex align-items-start sign-out-session">
                                        <h2 className="secondary-title secondary-account-text flex-grow-1 mb-16 fw-medium">
                                          Sign out all other sessions
                                        </h2>
                                        <button
                                          type="button"
                                          className="btn btn-danger btn-outline-one"
                                        >
                                          Sign out all
                                        </button>
                                      </div>
                                      <p className="text-light-text mb-24">
                                        Lost your phone? Left yourself logged in
                                        on a public computer? Need a <br />
                                        way to sign out everywhere except your
                                        current browser? This is for you.
                                      </p>
                                      <button
                                        type="button"
                                        className="btn btn-primary add-btn"
                                      >
                                        Update Changes
                                      </button>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                            <div className="add-new-column mb-24">
                              {/* <h2 className="secondary-title mb-16">Basic details</h2> */}
                              <div className="card-column custom-card ">
                                <Row>
                                  <Col sm="12">
                                    <div className="mb-24">
                                      <div className="page-heading">
                                        <h2 className="mb-24 fw-medium">
                                          Notifications
                                        </h2>
                                      </div>
                                    </div>
                                    <div className="form-check mb-12">
                                      <input
                                        className="form-check-input common-check-box "
                                        type="checkbox"
                                        value=""
                                      />
                                      <label className="ms-12 text-lights custom-label-bold form-check-label fw-semibold">
                                        All Permissions
                                      </label>
                                    </div>
                                    <div className="form-check mb-12">
                                      <input
                                        className="form-check-input common-check-box "
                                        type="checkbox"
                                        value=""
                                      />
                                      <label className="ms-12 text-lights custom-label-bold form-check-label fw-semibold">
                                      New Entries
                                      </label>
                                    </div>
                                    <div className="form-check mb-12">
                                      <input
                                        className="form-check-input common-check-box "
                                        type="checkbox"
                                        value=""
                                      />
                                      <label className="ms-12 text-lights custom-label-bold form-check-label fw-semibold">
                                      Pending Approval Memos
                                      </label>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </Form>
                          </div>
                       
               
                    </Col>
                  </Row>
                </Tab.Container>
              </Container>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
