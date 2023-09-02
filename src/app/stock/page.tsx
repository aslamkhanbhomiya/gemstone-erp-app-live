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
import Modal from "react-bootstrap/Modal";
// import Collapse from 'react-bootstrap/Collapse';

export default function Stock() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showDelete, setShowDelete] = useState(false);

  const handleDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

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
                  <Col md={3}>
                    <div className="page-heading">
                      <h2>Stock</h2>
                    </div>
                  </Col>
                  <Col md={9}>
                    <InputGroup className="justify-content-md-end header-btn-group">
                      <Link
                        href="/stock-grid"
                        className="btn btn-light tab-btn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1 2.5C1 2.10218 1.15804 1.72064 1.43934 1.43934C1.72064 1.15804 2.10218 1 2.5 1H5.5C5.89782 1 6.27936 1.15804 6.56066 1.43934C6.84196 1.72064 7 2.10218 7 2.5V5.5C7 5.89782 6.84196 6.27936 6.56066 6.56066C6.27936 6.84196 5.89782 7 5.5 7H2.5C2.10218 7 1.72064 6.84196 1.43934 6.56066C1.15804 6.27936 1 5.89782 1 5.5V2.5ZM2.5 2C2.36739 2 2.24021 2.05268 2.14645 2.14645C2.05268 2.24021 2 2.36739 2 2.5V5.5C2 5.63261 2.05268 5.75979 2.14645 5.85355C2.24021 5.94732 2.36739 6 2.5 6H5.5C5.63261 6 5.75979 5.94732 5.85355 5.85355C5.94732 5.75979 6 5.63261 6 5.5V2.5C6 2.36739 5.94732 2.24021 5.85355 2.14645C5.75979 2.05268 5.63261 2 5.5 2H2.5ZM9 2.5C9 2.10218 9.15804 1.72064 9.43934 1.43934C9.72064 1.15804 10.1022 1 10.5 1H13.5C13.8978 1 14.2794 1.15804 14.5607 1.43934C14.842 1.72064 15 2.10218 15 2.5V5.5C15 5.89782 14.842 6.27936 14.5607 6.56066C14.2794 6.84196 13.8978 7 13.5 7H10.5C10.1022 7 9.72064 6.84196 9.43934 6.56066C9.15804 6.27936 9 5.89782 9 5.5V2.5ZM10.5 2C10.3674 2 10.2402 2.05268 10.1464 2.14645C10.0527 2.24021 10 2.36739 10 2.5V5.5C10 5.63261 10.0527 5.75979 10.1464 5.85355C10.2402 5.94732 10.3674 6 10.5 6H13.5C13.6326 6 13.7598 5.94732 13.8536 5.85355C13.9473 5.75979 14 5.63261 14 5.5V2.5C14 2.36739 13.9473 2.24021 13.8536 2.14645C13.7598 2.05268 13.6326 2 13.5 2H10.5ZM1 10.5C1 10.1022 1.15804 9.72064 1.43934 9.43934C1.72064 9.15804 2.10218 9 2.5 9H5.5C5.89782 9 6.27936 9.15804 6.56066 9.43934C6.84196 9.72064 7 10.1022 7 10.5V13.5C7 13.8978 6.84196 14.2794 6.56066 14.5607C6.27936 14.842 5.89782 15 5.5 15H2.5C2.10218 15 1.72064 14.842 1.43934 14.5607C1.15804 14.2794 1 13.8978 1 13.5V10.5ZM2.5 10C2.36739 10 2.24021 10.0527 2.14645 10.1464C2.05268 10.2402 2 10.3674 2 10.5V13.5C2 13.6326 2.05268 13.7598 2.14645 13.8536C2.24021 13.9473 2.36739 14 2.5 14H5.5C5.63261 14 5.75979 13.9473 5.85355 13.8536C5.94732 13.7598 6 13.6326 6 13.5V10.5C6 10.3674 5.94732 10.2402 5.85355 10.1464C5.75979 10.0527 5.63261 10 5.5 10H2.5ZM9 10.5C9 10.1022 9.15804 9.72064 9.43934 9.43934C9.72064 9.15804 10.1022 9 10.5 9H13.5C13.8978 9 14.2794 9.15804 14.5607 9.43934C14.842 9.72064 15 10.1022 15 10.5V13.5C15 13.8978 14.842 14.2794 14.5607 14.5607C14.2794 14.842 13.8978 15 13.5 15H10.5C10.1022 15 9.72064 14.842 9.43934 14.5607C9.15804 14.2794 9 13.8978 9 13.5V10.5ZM10.5 10C10.3674 10 10.2402 10.0527 10.1464 10.1464C10.0527 10.2402 10 10.3674 10 10.5V13.5C10 13.6326 10.0527 13.7598 10.1464 13.8536C10.2402 13.9473 10.3674 14 10.5 14H13.5C13.6326 14 13.7598 13.9473 13.8536 13.8536C13.9473 13.7598 14 13.6326 14 13.5V10.5C14 10.3674 13.9473 10.2402 13.8536 10.1464C13.7598 10.0527 13.6326 10 13.5 10H10.5Z" />
                        </svg>
                      </Link>

                      <Link
                        href="/stock"
                        className="btn btn-light tab-btn active"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <path
                            d="M16 11H9M16 15H9M16 7H9"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.999 8C6.499 8 6.999 7.5 6.999 7C6.999 6.5 6.499 6 5.999 6C5.499 6 5 6.5 5 7C5 7.5 5.499 8 5.999 8ZM5.999 12C6.499 12 6.999 11.5 6.999 11C6.999 10.5 6.499 10 5.999 10C5.499 10 5 10.5 5 11C5 11.5 5.499 12 5.999 12ZM5.999 16C6.499 16 6.999 15.5 6.999 15C6.999 14.5 6.499 14 5.999 14C5.499 14 5 14.5 5 15C5 15.5 5.499 16 5.999 16Z"
                          />
                        </svg>
                      </Link>

                      <Dropdown>
                        <Dropdown.Toggle
                          className=" light-btn column-btn custom-drop-arrow"
                          variant="light"
                          id="dropdown-basic"
                        >
                          Columns
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="column-dropmenu column-dropmenu-width ">
                          <li>
                            <form action="">
                              <div className="form-check">
                                <input
                                  className="form-check-input common-check-box"
                                  type="checkbox"
                                  value=""
                                  id="Stone"
                                />
                                <label className="form-check-label">
                                  Stone
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input common-check-box"
                                  type="checkbox"
                                  value=""
                                  id="Shape"
                                />
                                <label className="form-check-label">
                                  Shape
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input common-check-box"
                                  type="checkbox"
                                  value=""
                                  id="Length"
                                />
                                <label className="form-check-label">
                                  Length
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input common-check-box"
                                  type="checkbox"
                                  value=""
                                  id="Length"
                                />
                                <label className="form-check-label">
                                  Length
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input common-check-box"
                                  type="checkbox"
                                  value=""
                                  id="Width"
                                />
                                <label className="form-check-label">
                                  Width
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input common-check-box"
                                  type="checkbox"
                                  value=""
                                  id="Height "
                                />
                                <label className="form-check-label">
                                  Height
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input common-check-box"
                                  type="checkbox"
                                  value=""
                                  id="Carat Weight  "
                                />
                                <label className="form-check-label">
                                  Carat Weight
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input common-check-box"
                                  type="checkbox"
                                  value=""
                                  id="Pieces  "
                                />
                                <label className="form-check-label">
                                  Pieces
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input common-check-box"
                                  type="checkbox"
                                  value=""
                                  id="CP "
                                />
                                <label className="form-check-label">CP</label>
                              </div>
                            </form>
                          </li>
                        </Dropdown.Menu>
                      </Dropdown>

                      <Link
                        href="/product-merge"
                        className="btn btn-warning btn-warn"
                      >
                        Merge
                      </Link>

                      <Link
                        href="/add-new-stock"
                        className="btn btn-primary add-btn"
                      >
                        <svg
                          className="add-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                        >
                          <path d="M8.50001 1.3335C4.82001 1.3335 1.83334 4.32016 1.83334 8.00016C1.83334 11.6802 4.82001 14.6668 8.50001 14.6668C12.18 14.6668 15.1667 11.6802 15.1667 8.00016C15.1667 4.32016 12.18 1.3335 8.50001 1.3335ZM11.8333 8.66683H9.16668V11.3335H7.83334V8.66683H5.16668V7.3335H7.83334V4.66683H9.16668V7.3335H11.8333V8.66683Z" />
                        </svg>
                        Add New
                      </Link>
                    </InputGroup>
                  </Col>
                </Row>

      
                <Row className="mb-24">
                  <Col md={12}>
                    <div className="filter-section card-column">
                      <Form className="row">
                        <Col lg="2" sm="6" md="4">
                          <Form.Group
                            className="mb-24"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="custom-label">
                              Stone
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Stone Name"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="2" sm="6" md="4">
                          <Form.Group
                            className="mb-24"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="custom-label">
                              Shape
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Shape Name"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="2" sm="6" md="4">
                          <InputGroup className=" align-items-start flex-column mb-24">
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
                                <Form.Control type="Shape" placeholder="From" />
                              </Form.Group>
                              <Form.Group
                                className="from-to-col"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Control type="Shape" placeholder="To" />
                              </Form.Group>
                            </div>
                          </InputGroup>
                        </Col>
                        <Col lg="2" sm="6" md="4">
                          <InputGroup className=" align-items-start flex-column mb-24">
                            <div className="flex-grow-1">
                              <Form.Label className="custom-label">
                                Width
                              </Form.Label>
                            </div>
                            <div className="d-flex input-gap-group align-items-stretch flex-wrap w-100">
                              <Form.Group
                                className="from-to-col"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Control type="Shape" placeholder="From" />
                              </Form.Group>
                              <Form.Group
                                className="from-to-col"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Control type="Shape" placeholder="To" />
                              </Form.Group>
                            </div>
                          </InputGroup>
                        </Col>
                        <Col lg="2" sm="6" md="4">
                          <InputGroup className=" align-items-start flex-column mb-24">
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
                                <Form.Control type="Shape" placeholder="From" />
                              </Form.Group>
                              <Form.Group
                                className="from-to-col"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Control type="Shape" placeholder="To" />
                              </Form.Group>
                            </div>
                          </InputGroup>
                        </Col>
                        <Col lg="2" sm="6" md="4">
                          <InputGroup className=" align-items-start flex-column mb-24">
                            <div className="flex-grow-1">
                              <Form.Label className="custom-label">
                                Carat Weight
                              </Form.Label>
                            </div>
                            <div className="d-flex input-gap-group align-items-stretch flex-wrap w-100">
                              <Form.Group
                                className="from-to-col"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Control type="Shape" placeholder="From" />
                              </Form.Group>
                              <Form.Group
                                className="from-to-col"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Control type="Shape" placeholder="To" />
                              </Form.Group>
                            </div>
                          </InputGroup>
                        </Col>
                        <Col lg="12">
                          <div className="text-end">
                            <Button variant="success">Search</Button>
                          </div>
                        </Col>
                      </Form>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg="12" className="table-list-data">
                    <div className="table-responsive stock-responsive">
                      <Table className="table-list mb-0">
                        <thead>
                          <tr>
                            <th>Stone</th>
                            <th className="text-center">Shape</th>
                            <th className="text-center">Length</th>
                            <th className="text-center">Width</th>
                            <th className="text-center">Height</th>
                            <th className="text-center">Carat Weight</th>
                            <th className="text-center">Pieces</th>
                            <th className="text-center">CP</th>
                            <th className="text-center actions-common-th">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Emerald</td>
                            <td className="text-center">Round</td>
                            <td className="text-center">11.8 </td>
                            <td className="text-center">6.9 </td>
                            <td className="text-center">4.4</td>
                            <td className="text-center">1.5</td>
                            <td className="text-center">50</td>
                            <td className="text-center">20</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/view-stock"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>

                                <Link
                                  href="/edit-stock"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Button
                                  variant="danger"
                                  onClick={handleShowDelete}
                                >
                                  Delete
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Emerald</td>
                            <td className="text-center">Round</td>
                            <td className="text-center">11.8 </td>
                            <td className="text-center">6.9 </td>
                            <td className="text-center">4.4</td>
                            <td className="text-center">1.5</td>
                            <td className="text-center">50</td>
                            <td className="text-center">20</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/view-stock"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                                <Link
                                  href="/edit-stock"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Button
                                  variant="danger"
                                  onClick={handleShowDelete}
                                >
                                  Delete
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Emerald</td>
                            <td className="text-center">Round</td>
                            <td className="text-center">11.8 </td>
                            <td className="text-center">6.9 </td>
                            <td className="text-center">4.4</td>
                            <td className="text-center">1.5</td>
                            <td className="text-center">50</td>
                            <td className="text-center">20</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/view-stock"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                                <Link
                                  href="/edit-stock"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Button
                                  variant="danger"
                                  onClick={handleShowDelete}
                                >
                                  Delete
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Emerald</td>
                            <td className="text-center">Round</td>
                            <td className="text-center">11.8 </td>
                            <td className="text-center">6.9 </td>
                            <td className="text-center">4.4</td>
                            <td className="text-center">1.5</td>
                            <td className="text-center">50</td>
                            <td className="text-center">20</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/view-stock"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                                <Link
                                  href="/edit-stock"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Button
                                  variant="danger"
                                  onClick={handleShowDelete}
                                >
                                  Delete
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Emerald</td>
                            <td className="text-center">Round</td>
                            <td className="text-center">11.8 </td>
                            <td className="text-center">6.9 </td>
                            <td className="text-center">4.4</td>
                            <td className="text-center">1.5</td>
                            <td className="text-center">50</td>
                            <td className="text-center">20</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/view-stock"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                                <Link
                                  href="/edit-stock"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Button
                                  variant="danger"
                                  onClick={handleShowDelete}
                                >
                                  Delete
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Emerald</td>
                            <td className="text-center">Round</td>
                            <td className="text-center">11.8 </td>
                            <td className="text-center">6.9 </td>
                            <td className="text-center">4.4</td>
                            <td className="text-center">1.5</td>
                            <td className="text-center">50</td>
                            <td className="text-center">20</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/view-stock"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                                <Link
                                  href="/edit-stock"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Button
                                  variant="danger"
                                  onClick={handleShowDelete}
                                >
                                  Delete
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Emerald</td>
                            <td className="text-center">Round</td>
                            <td className="text-center">11.8 </td>
                            <td className="text-center">6.9 </td>
                            <td className="text-center">4.4</td>
                            <td className="text-center">1.5</td>
                            <td className="text-center">50</td>
                            <td className="text-center">20</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/view-stock"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                                <Link
                                  href="/edit-stock"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Button
                                  variant="danger"
                                  onClick={handleShowDelete}
                                >
                                  Delete
                                </Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
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
        show={showDelete}
        onHide={handleDelete}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Emerald </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-30 pb-30">
          <div className="d-fex flex-column align-items-center justify-content-center text-center">
            <div className="page-heading">
              <h2>Do you really want to delete this Stock entry? </h2>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="add-btn  bg-primary-subtle me-12"
            onClick={handleDelete}
          >
            Cancel
          </Button>
          <Button variant="primary" className="add-btn" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      {/* stock-enter-delete-modal-close */}
    </div>
  );
}
