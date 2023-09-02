"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
// import Collapse from 'react-bootstrap/Collapse';

export default function Dashboard() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <main className="page-content">
          <div className="dashboard-info">
            <Container fluid>
              <Row className="dash-info-row">
                <Col md={6} xl={3}>
                  <div className="d-flex card-info align-items-center ">
                    <div className="flex-shrink-0">
                      <Image src="/images/Item.svg" alt="" fluid />
                    </div>
                    <div className="flex-grow-1 card-content ">
                      <h6>Inventory</h6>
                      <h2>4,926</h2>
                    </div>
                  </div>
                </Col>
                <Col md={6} xl={3}>
                  <div className="d-flex card-info align-items-center ">
                    <div className="flex-shrink-0">
                      <Image src="/images/Item-2.svg" alt="" fluid />
                    </div>
                    <div className="flex-grow-1 card-content ">
                      <h6>Pending Approval Memos</h6>
                      <h2>212</h2>
                    </div>
                  </div>
                </Col>
                <Col md={6} xl={3}>
                  <div className="d-flex card-info align-items-center ">
                    <div className="flex-shrink-0">
                      <Image src="/images/Item.svg" alt="" fluid />
                    </div>
                    <div className="flex-grow-1 card-content ">
                      <h6>New Inquiry/Orders</h6>
                      <h2>12</h2>
                    </div>
                  </div>
                </Col>
                <Col md={6} xl={3}>
                  <div className="d-flex card-info align-items-center">
                    <div className="flex-shrink-0">
                      <Image src="/images/Item.svg" alt="" fluid />
                    </div>
                    <div className="flex-grow-1 card-content ">
                      <h6>Sales for the Month</h6>
                      <h2>$50,236</h2>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="dash-info-row-two ">
                <Col lg={4}>
                  <div className="manufacture-card height-100">
                    <h4>Manufacturing Status</h4>
                    <div className="text-center manufacture-img">
                      <Image
                        src="/images/manufacturing-satus.png"
                        alt=""
                        fluid
                      />
                    </div>

                    <ul className="list-unstyled manufacture-list">
                      <li className="d-flex justify-content-between">
                        <strong className="flex-shrink-1">Assorting</strong>
                        <div className="flex-shrink-0">33</div>
                      </li>
                      <li className="d-flex justify-content-between">
                        <strong className="flex-shrink-1">Pre-Forming</strong>
                        <div className="flex-shrink-0">18</div>
                      </li>
                      <li className="d-flex justify-content-between">
                        <strong className="flex-shrink-1">Shaping</strong>
                        <div className="flex-shrink-0">22</div>
                      </li>
                      <li className="d-flex justify-content-between">
                        <strong className="flex-shrink-1">Polishing</strong>
                        <div className="flex-shrink-0">12</div>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="inquries-order height-100">
                    <h4>New Inquiry/Orders</h4>
                    <h2>Sat, 11 March 2023</h2>
                    <h6>Today</h6>

                    <ul className="list-unstyled inquries-list">
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">1</div>
                        <div className="flex-grow-1">
                          New Inquiry - Quotation Pending
                        </div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">2</div>
                        <div className="flex-grow-1">Order Completed</div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">3</div>
                        <div className="flex-grow-1">Order Pending</div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">4</div>
                        <div className="flex-grow-1">Order Cancelled</div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">5</div>
                        <div className="flex-grow-1">
                          New Inquiry - Quotation Pending
                        </div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">6</div>
                        <div className="flex-grow-1">Order Completed</div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">7</div>
                        <div className="flex-grow-1">Order Pending</div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">8</div>
                        <div className="flex-grow-1">Order Cancelled</div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">9</div>
                        <div className="flex-grow-1">Order Completed</div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">10</div>
                        <div className="flex-grow-1">Order Pending</div>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="inquries-order height-100">
                    <h4>Reminders</h4>
                    <h2>Sat, 11 March 2023</h2>
                    <h6>Today</h6>

                    <ul className="list-unstyled inquries-list">
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">1</div>
                        <div className="flex-grow-1">
                          Factory name - Stones - Status
                        </div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">2</div>
                        <div className="flex-grow-1">
                          Factory name - Stones - Status
                        </div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">3</div>
                        <div className="flex-grow-1">
                          Factory name - Stones - Status
                        </div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">4</div>
                        <div className="flex-grow-1">
                          Factory name - Stones - Status
                        </div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">5</div>
                        <div className="flex-grow-1">
                          Factory name - Stones - Status
                        </div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">6</div>
                        <div className="flex-grow-1">
                          Factory name - Stones - Status
                        </div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">7</div>
                        <div className="flex-grow-1">
                          Factory name - Stones - Status
                        </div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">8</div>
                        <div className="flex-grow-1">
                          Factory name - Stones - Status
                        </div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">9</div>
                        <div className="flex-grow-1">
                          Factory name - Stones - Status
                        </div>
                      </li>
                      <li className="d-flex align-items-center ">
                        <div className="flex-shrink-0 number">10</div>
                        <div className="flex-grow-1">
                          Factory name - Stones - Status
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </main>
      </div>
    </div>
  );
}
