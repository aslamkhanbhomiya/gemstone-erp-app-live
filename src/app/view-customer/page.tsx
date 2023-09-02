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
// import { TagsInput } from "react-tag-input-component";

// import Collapse from 'react-bootstrap/Collapse';

export default function ViewCustomer() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [selected, setSelected] = useState(["Emerald"]);
  // const [selecteD, setSelecteD] = useState(["Round"]);

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
                        href="/customers"
                        className="text-primary  text-decoration-none"
                      >
                        Customers {">"}
                      </Link>
                    </div>
                  </Col>
                  <Col xs="7" sm="5">
                    <div className="page-heading">
                      <h2>View Customer </h2>
                    </div>
                  </Col>
                  <Col xs="5" sm="7">
                    <InputGroup className="justify-content-md-end header-btn-group">
                      <Link
                        href="/customers"
                        className="btn btn-primary add-btn"
                      >
                        <svg
                          className="add-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.2734 4.94L7.2201 8L10.2734 11.06L9.33344 12L5.33344 8L9.33344 4L10.2734 4.94Z" />
                        </svg>
                        Back
                      </Link>
                    </InputGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <div className="add-new-column">
                      <div className="card-column custom-card   mb-24">
                        <div className="page-heading mb-24 d-flex align-items-start align-items-sm-center justify-content-between">
                          <h2>Mr. John A. Doe</h2>

                          <Link
                            href="/edit-customer-details"
                            className="btn btn-primary add-btn"
                          >
                            Edit
                          </Link>
                        </div>
                        <Row>
                          <Col sm="6" lg="3">
                            <div className="mb-24">
                              <span className="customer-id-text">
                                Company Name
                              </span>
                              <h3 className="custmer-id">
                                Lorem Ispum Pvt. Ltd.
                              </h3>
                            </div>
                          </Col>
                          <Col sm="6" lg="3">
                            <div className="mb-24">
                              <span className="customer-id-text">
                                Customer ID
                              </span>
                              <h3 className="custmer-id">00000123652</h3>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="6" lg="3">
                            <div className="mb-24">
                              <span className="customer-id-text">Phone</span>
                              <h3 className="custmer-id">+61 253 652 5555</h3>
                            </div>
                          </Col>
                          <Col sm="6" lg="3">
                            <div className="mb-24">
                              <span className="customer-id-text">Email</span>
                              <h3 className="custmer-id">john.doe@gmail.com</h3>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <Accordion className="activity-time-column mb-24">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <span className="title fw-semibold">
                              Customer Information
                            </span>
                          </Accordion.Header>
                          <Accordion.Body className="view-customer-body pb-0">
                            <Form>
                              <div className="add-new-column custom-card  mb-24">
                                <h2 className="secondary-title mb-16">
                                  Basic details
                                </h2>

                                <Row>
                                  <Col sm="6" md="4">
                                    <Form.Group
                                      className="mb-24"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label className="custom-label">
                                        Title
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
                                  </Col>
                                  <Col sm="6" md="4">
                                    <Form.Group
                                      className="mb-24"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label className="custom-label">
                                        First Name
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="First Name"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6" md="4">
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        Last Name
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="Last Name"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6" md="4">
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        Company Name
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="Company Name"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6" md="4">
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        GSTIN
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="GSTIN"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6" md="4">
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        Phone
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="Phone"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6" md="4">
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        Mobile
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="Mobile"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6" md="4">
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        Email
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="email"
                                        disabled
                                        placeholder="Email"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6" md="4">
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        Fax
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="Fax"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6">
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        Website
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="Website"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6">
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        Others
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="Website"
                                      />
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </div>

                              <div className="add-new-column custom-card  mb-24">
                                <h2 className="secondary-title mb-16">
                                  Billing Address
                                </h2>

                                <Row>
                                  <Col sm="6">
                                    <Form.Group
                                      className="mb-24"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label className="custom-label">
                                        Address Line 1
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="Address Line 1"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6">
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        Address Line 2
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="Address Line 2"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6" md="4" lg={3}>
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        City
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="City"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6" md="4" lg={3}>
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        State
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="State"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6" md="4" lg={3}>
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        Zip Code
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="Zip Code"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6" md="4" lg={3}>
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        Country
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="Country"
                                      />
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </div>
                              <div className="add-new-column custom-card ">
                                <h2 className="secondary-title mb-16">
                                  Bank Details
                                </h2>

                                <Row>
                                  <Col sm="6" md="4" lg={3}>
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        Bank LIC No.
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="Bank LIC No."
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6" md="4" lg={3}>
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        Bank Name
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="Bank Name"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6" md="4" lg={3}>
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        Branch
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="Branch"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col sm="6" md="4" lg={3}>
                                    <Form.Group className="mb-24">
                                      <Form.Label className="custom-label">
                                        Account No.
                                        {/* <span className="text-primary">*</span> */}
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        disabled
                                        placeholder="Account No."
                                      />
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </div>
                            </Form>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <div className="card-column p-0 custom-card   mb-24">
                        <h2 className="secondary-title  p-24 ">
                          Order History
                        </h2>

                        <div className="table-responsive ">
                          <Table className="table-list view-customer-table mb-0">
                            <thead>
                              <tr>
                                <th>Order ID</th>
                                <th>Date</th>
                                <th>Stone</th>
                                <th>Shape</th>
                                <th style={{ width: "120px" }}>Order Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>JL001232564</td>
                                <td>22/06/2023 </td>
                                <td>Emerald </td>
                                <td>Square </td>
                                <td>
                                  <span className="badge badge-circle bg-success-subtle text-success-emphasis">
                                    Completed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>JL001232564</td>
                                <td>22/06/2023 </td>
                                <td>Emerald </td>
                                <td>Square </td>
                                <td>
                                  <span className="badge badge-circle bg-warning-subtle text-warning-emphasis">
                                    Pending
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>JL001232564</td>
                                <td>22/06/2023 </td>
                                <td>Emerald </td>
                                <td>Square </td>
                                <td>
                                  <span className="badge badge-circle bg-primary-subtle text-primary-emphasis">
                                    Cancelled
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                      <div className="card-column p-0 custom-card   mb-24">
                        <h2 className="secondary-title  p-24 ">Quotations</h2>

                        <div className="table-responsive ">
                          <Table className="table-list view-customer-table mb-0">
                            <thead>
                              <tr>
                                <th>Date</th>
                                <th>Stone</th>
                                <th>Shape</th>
                                <th>Pieces</th>
                                <th>Proposed Price</th>
                                <th style={{ width: "120px" }}>Actions </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>22/06/2023 </td>
                                <td>Emerald </td>
                                <td>Square </td>
                                <td>50 </td>
                                <td>$ 9,000 </td>
                                <td>
                                  <Link
                                    href="/order-details"
                                    className="btn view-order-btn bg-primary-subtle"
                                  >
                                    View Order
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>22/06/2023 </td>
                                <td>Emerald </td>
                                <td>Square </td>
                                <td>50 </td>
                                <td>$ 9,000 </td>
                                <td>
                                  <Link
                                    href="/order-details"
                                    className="btn view-order-btn bg-primary-subtle"
                                  >
                                    View Order
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>22/06/2023 </td>
                                <td>Emerald </td>
                                <td>Square </td>
                                <td>50 </td>
                                <td>$ 9,000 </td>
                                <td>
                                  <Link
                                    href="/order-details"
                                    className="btn view-order-btn bg-primary-subtle"
                                  >
                                    View Order
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>22/06/2023 </td>
                                <td>Emerald </td>
                                <td>Square </td>
                                <td>50 </td>
                                <td>$ 9,000 </td>
                                <td>
                                  <Link
                                    href="/order-details"
                                    className="btn view-order-btn bg-primary-subtle"
                                  >
                                    View Order
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" className="mb-24">
                    <div className="card-column p-0 custom-card  height-100  mb-24">
                      <h2 className="secondary-title  p-24 ">Notes</h2>
                      <div className="p-24 pt-0">
                        <ul className="list-unstyled m-0 notes-ul ">
                          <li className="d-flex align-items-start">
                            <h3 className="custmer-id flex-grow-1">
                              Lorem Ispum Pvt. Ltd.
                            </h3>
                            <Button
                              variant="link"
                              className="btn-light-text flex-shrink-0"
                            >
                              Remove
                            </Button>
                          </li>
                          <li className="d-flex align-items-start">
                            <h3 className="custmer-id flex-grow-1">
                              Lorem Ispum Pvt. Ltd.
                            </h3>
                            <Button
                              variant="link"
                              className="btn-light-text flex-shrink-0"
                            >
                              Remove
                            </Button>
                          </li>
                          <li className="d-flex align-items-start">
                            <h3 className="custmer-id flex-grow-1">
                              Lorem Ispum Pvt. Ltd.
                            </h3>
                            <Button
                              variant="link"
                              className="btn-light-text flex-shrink-0"
                            >
                              Remove
                            </Button>
                          </li>
                        </ul>
                        <Form>
                          <Form.Group
                            className="mt-24"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label className="custom-label">
                              Add notes
                            </Form.Label>
                            <Form.Control
                              className="add-note-text"
                              as="textarea"
                              rows={6}
                              cols={4}
                            />
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" className="mb-24">
                    <div className="card-column p-0 custom-card  height-100 mb-24">
                      <h2 className="secondary-title   p-24 ">Activity</h2>
                      <div className="p-24 pt-0">
                        <ul className="list-unstyled m-0 activity-ul  ">
                          <li>
                            <div>
                              <h3 className="custmer-id mb-2">
                                Order Created{" "}
                              </h3>
                              <span className="customer-id-text">
                                Sun, March 12, 2023, 08:31:36
                              </span>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h3 className="custmer-id mb-2">Approval </h3>
                              <span className="customer-id-text">
                                Sun, March 12, 2023, 08:31:36
                              </span>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h3 className="custmer-id mb-2">
                                Order Pending{" "}
                              </h3>
                              <span className="customer-id-text">
                                Sun, March 12, 2023, 08:31:36
                              </span>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h3 className="custmer-id mb-2">
                                Inquiry Created{" "}
                              </h3>
                              <span className="customer-id-text">
                                Sun, March 12, 2023, 08:31:36
                              </span>
                            </div>
                          </li>
                        </ul>
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
