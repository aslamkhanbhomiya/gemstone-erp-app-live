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

export default function AddNewStock() {
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
                  <Col xs={12}>
                    <div className="bredcrumb mb-12">
                      <Link
                        href="/stock"
                        className="text-primary  text-decoration-none"
                      >
                        Stock {">"}
                      </Link>
                    </div>
                  </Col>
                  <Col xs={7}>
                    <div className="page-heading">
                      <h2>Add New Stock</h2>
                    </div>
                  </Col>
                  <Col xs={5}>
                    <InputGroup className="justify-content-md-end header-btn-group">
                      <Link href="/stock" className="btn btn-primary add-btn">
                        Save
                      </Link>
                    </InputGroup>
                  </Col>
                </Row>

                <Row className="mb-24">
                  <Col md={12}>
                    <div className="table-responsive">
                      <div className="card-column custom-card">
                        <Form className="row">
                          <Col sm="6" md="4">
                            <Form.Group
                              className="mb-24"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="custom-label">
                                Stone
                                <span className="text-primary">*</span>
                              </Form.Label>
                              {/* <Form.Control
                              type="text"
                              placeholder="Stone Name"
                            /> */}
                              <TagsInput
                                value={selected}
                                onChange={setSelected}
                                name="stone"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm="6" md="4">
                            <Form.Group
                              className="mb-24"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="custom-label">
                                Date
                              </Form.Label>
                              <Form.Control
                                type="date"
                                placeholder="Shape Name"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm="6" md="4">
                            <Form.Group
                              className="mb-24"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="custom-label">
                                Yield From
                              </Form.Label>

                              <Form.Select
                                className="form-control"
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
                                SKU
                                <span className="text-primary">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="XYZ12345"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm="6" md="4">
                            <Form.Group
                              className="mb-24"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="custom-label">
                                Pieces
                                <span className="text-primary">*</span>
                              </Form.Label>
                              <Form.Control type="text" placeholder="5" />
                            </Form.Group>
                          </Col>
                          <Col sm="6" md="4">
                            <Form.Group
                              className="mb-24"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="custom-label">
                                Shape
                                <span className="text-primary">*</span>
                              </Form.Label>
                              {/* <Form.Control
                              type="text"
                              placeholder="Stone Name"
                            /> */}
                              <TagsInput
                                value={selecteD}
                                onChange={setSelecteD}
                                name="shape"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm="6" md="4">
                            <Form.Group
                              className="mb-24"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="custom-label">
                                Carat Weight
                                <span className="text-primary">*</span>
                              </Form.Label>
                              <Form.Control type="text" placeholder="8000" />
                            </Form.Group>
                          </Col>

                          <Col sm="6" md="4">
                            <Form.Group
                              className="mb-24"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="custom-label">
                                CP
                                {/* <span className="text-primary">*</span> */}
                              </Form.Label>
                              <Form.Control type="text" placeholder="6000" />
                            </Form.Group>
                          </Col>

                          <Col sm="6" md="4">
                            <Form.Group
                              className="mb-24"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="custom-label">
                                AP
                                {/* <span className="text-primary">*</span> */}
                              </Form.Label>
                              <Form.Control type="text" placeholder="100" />
                            </Form.Group>
                          </Col>

                          {/* <Col  sm="12">
                        <Form.Group
                          
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="custom-label">
                            Size
                              <span className="text-primary">*</span>
                             
                            </Form.Label>
                           
                          </Form.Group>
                        </Col> */}

                          <Col sm="6" md="3">
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
                                    placeholder="Length"
                                  />
                                </Form.Group>
                                <Form.Group
                                  className="from-to-col d-none"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Control type="text" placeholder="To" />
                                </Form.Group>
                              </div>
                            </InputGroup>
                          </Col>

                          <Col sm="6" md="3">
                            <InputGroup className="mb-24 align-items-start flex-column mb-24">
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
                                  <Form.Control
                                    type="text"
                                    placeholder="Width"
                                  />
                                </Form.Group>
                                <Form.Group
                                  className="from-to-col d-none"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Control type="text" placeholder="To" />
                                </Form.Group>
                              </div>
                            </InputGroup>
                          </Col>
                          <Col sm="6" md="3">
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
                                    placeholder="Height"
                                  />
                                </Form.Group>
                                <Form.Group
                                  className="from-to-col d-none"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Control type="text" placeholder="To" />
                                </Form.Group>
                              </div>
                            </InputGroup>
                          </Col>

                          <Col sm="6" md="3">
                            <div className="column d-flex flex-column mb-24">
                              <Form.Label className="custom-label">
                                Define Range
                              </Form.Label>
                               <button type="button" className="btn btn-primary add-btn define-btn">Define Range</button>
                            </div>
                          </Col>
                          <Col sm="12">
                            <Form.Group
                              className="mb-24 "
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>Remarks</Form.Label>
                              <Form.Control
                                as="textarea"
                                className="text-area"
                                rows={4}
                              />
                            </Form.Group>
                          </Col>
                          <Col sm="12">
                            <Form.Group
                              className="mb-24 "
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>
                                Images
                                <span className="text-primary">*</span>
                              </Form.Label>
                              <div className="flex-container">
                                <div className="flex-box">
                                  <img
                                    src="/images/uplode-png-img.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-box-common">
                                  <img
                                    src="/images/images-stone-1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-box-common">
                                  <img
                                    src="/images/images-stone-2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-box-common">
                                  <img
                                    src="/images/images-stone-3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </Form.Group>
                          </Col>
                        </Form>
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
