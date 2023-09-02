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
import Tab from "react-bootstrap/Tab";
// import Collapse from 'react-bootstrap/Collapse';

export default function StonesAndShapes() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // add-new-stone-modal
  const [showAddNewStone, setshowAddNewStone] = useState(false);
  const handleAddNewStone = () => setshowAddNewStone(false);
  const handleshowAddNewStone = () => setshowAddNewStone(true);
  // add-new-stone-modal-close

  // add-new-stone-modal
  const [showAddNewShape, setshowAddNewShape] = useState(false);
  const handleAddNewShape = () => setshowAddNewShape(false);
  const handleshowAddNewShape = () => setshowAddNewShape(true);
  // add-new-stone-modal-close

  // edit-new-stone-modal
  const [showEditNewStone, setshowEditNewStone] = useState(false);
  const handleEditNewStone = () => setshowEditNewStone(false);
  const handleshowEditNewStone = () => setshowEditNewStone(true);
  // edit-new-stone-modal-close

  // delete-new-stone-modal
  const [showDeleteNewStone, setshowDeleteNewStone] = useState(false);
  const handleDeleteNewStone = () => setshowDeleteNewStone(false);
  const handleshowDeleteNewStone = () => setshowDeleteNewStone(true);
  // delete-new-stone-modal-close

  // EditNewShape-modal
  const [showEditNewShape, setshowEditNewShape] = useState(false);
  const handleEditNewShape = () => setshowEditNewShape(false);
  const handleshowEditNewShape = () => setshowEditNewShape(true);
  // EditNewShape-modal-close

  // DeleteNewShape-modal
  const [showDeleteNewShape, setshowDeleteNewShape] = useState(false);
  const handleDeleteNewShape = () => setshowDeleteNewShape(false);
  const handleshowDeleteNewShape = () => setshowDeleteNewShape(true);
  // DeleteNewShape-modal-close

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
                  <Col sm={8}>
                    <div className="page-heading d-flex align-items-center flex-wrap ">
                      <h2 className="me-4">Manage Setting</h2>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <InputGroup className="justify-content-sm-end mt-12 mt-sm-0 header-btn-group">
                      <Button
                        variant="primary"
                        className="add-btn"
                        onClick={handleshowAddNewShape}
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
                        Add New Shape
                      </Button>
                      <Button
                        variant="success"
                        className="add-btn"
                        onClick={handleshowAddNewStone}
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
                        Add New Stone
                      </Button>
                    </InputGroup>
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
                          <Link href="/account-settings" className="nav-link ">
                            Account Settings
                          </Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link
                            href="/stones-and-shapes"
                            className="nav-link active"
                          >
                            Stones & Shapes
                          </Link>
                        </Nav.Item>
                      </Nav>
                    </Col>

                    <Col lg="12" className="table-list-data">
                      <div className="table-responsive account-responsive">
                        <Table className="table-list account-setting-tab mb-0">
                          <thead>
                            <tr>
                              <th>Stone</th>
                              <th
                                className=" actions-common-th"
                               
                              >
                                Actions
                              </th>
                              <th>
                                Shape
                              </th>
                              <th
                                className=" actions-common-th"
                               
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Emerald</td>
                              <td>
                                <div className="d-flex align-items-center  action-btn-column account-setting-btn">
                                  <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={handleshowEditNewStone}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M7.11555 3.29492L0.856689 9.55335V11.1433H2.44669L8.70512 4.88449L7.11555 3.29492Z" />
                                      <path d="M10.8134 1.18661C10.6025 0.975829 10.3166 0.857422 10.0184 0.857422C9.72023 0.857422 9.43427 0.975829 9.22339 1.18661L7.72339 2.68875L9.31296 4.27832L10.813 2.77832C10.9176 2.6739 11.0007 2.54987 11.0573 2.41332C11.114 2.27677 11.1432 2.13039 11.1432 1.98256C11.1433 1.83472 11.1141 1.68832 11.0576 1.55174C11.001 1.41517 10.918 1.29109 10.8134 1.18661Z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger "
                                    onClick={handleshowDeleteNewStone}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M3.96342 1.60531H3.85623C3.91518 1.60531 3.96342 1.55708 3.96342 1.49813V1.60531H8.03654V1.49813C8.03654 1.55708 8.08478 1.60531 8.14373 1.60531H8.03654V2.57H9.00123V1.49813C9.00123 1.02516 8.6167 0.640625 8.14373 0.640625H3.85623C3.38327 0.640625 2.99873 1.02516 2.99873 1.49813V2.57H3.96342V1.60531ZM10.7162 2.57H1.28373C1.04658 2.57 0.85498 2.7616 0.85498 2.99875V3.4275C0.85498 3.48645 0.903215 3.53469 0.962168 3.53469H1.77143L2.10238 10.5421C2.12381 10.999 2.50165 11.3594 2.95854 11.3594H9.04143C9.49965 11.3594 9.87615 11.0003 9.89759 10.5421L10.2285 3.53469H11.0378C11.0967 3.53469 11.145 3.48645 11.145 3.4275V2.99875C11.145 2.7616 10.9534 2.57 10.7162 2.57ZM8.93826 10.3947H3.0617L2.73746 3.53469H9.2625L8.93826 10.3947Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                              <td >
                                Oval
                              </td>
                              <td>
                                <div className="d-flex align-items-center  action-btn-column account-setting-btn">
                                  <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={handleshowEditNewShape}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M7.11555 3.29492L0.856689 9.55335V11.1433H2.44669L8.70512 4.88449L7.11555 3.29492Z" />
                                      <path d="M10.8134 1.18661C10.6025 0.975829 10.3166 0.857422 10.0184 0.857422C9.72023 0.857422 9.43427 0.975829 9.22339 1.18661L7.72339 2.68875L9.31296 4.27832L10.813 2.77832C10.9176 2.6739 11.0007 2.54987 11.0573 2.41332C11.114 2.27677 11.1432 2.13039 11.1432 1.98256C11.1433 1.83472 11.1141 1.68832 11.0576 1.55174C11.001 1.41517 10.918 1.29109 10.8134 1.18661Z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger "
                                    onClick={handleshowDeleteNewShape}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M3.96342 1.60531H3.85623C3.91518 1.60531 3.96342 1.55708 3.96342 1.49813V1.60531H8.03654V1.49813C8.03654 1.55708 8.08478 1.60531 8.14373 1.60531H8.03654V2.57H9.00123V1.49813C9.00123 1.02516 8.6167 0.640625 8.14373 0.640625H3.85623C3.38327 0.640625 2.99873 1.02516 2.99873 1.49813V2.57H3.96342V1.60531ZM10.7162 2.57H1.28373C1.04658 2.57 0.85498 2.7616 0.85498 2.99875V3.4275C0.85498 3.48645 0.903215 3.53469 0.962168 3.53469H1.77143L2.10238 10.5421C2.12381 10.999 2.50165 11.3594 2.95854 11.3594H9.04143C9.49965 11.3594 9.87615 11.0003 9.89759 10.5421L10.2285 3.53469H11.0378C11.0967 3.53469 11.145 3.48645 11.145 3.4275V2.99875C11.145 2.7616 10.9534 2.57 10.7162 2.57ZM8.93826 10.3947H3.0617L2.73746 3.53469H9.2625L8.93826 10.3947Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Emerald</td>
                              <td>
                                <div className="d-flex align-items-center  action-btn-column account-setting-btn">
                                  <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={handleshowEditNewStone}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M7.11555 3.29492L0.856689 9.55335V11.1433H2.44669L8.70512 4.88449L7.11555 3.29492Z" />
                                      <path d="M10.8134 1.18661C10.6025 0.975829 10.3166 0.857422 10.0184 0.857422C9.72023 0.857422 9.43427 0.975829 9.22339 1.18661L7.72339 2.68875L9.31296 4.27832L10.813 2.77832C10.9176 2.6739 11.0007 2.54987 11.0573 2.41332C11.114 2.27677 11.1432 2.13039 11.1432 1.98256C11.1433 1.83472 11.1141 1.68832 11.0576 1.55174C11.001 1.41517 10.918 1.29109 10.8134 1.18661Z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger "
                                    onClick={handleshowDeleteNewStone}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M3.96342 1.60531H3.85623C3.91518 1.60531 3.96342 1.55708 3.96342 1.49813V1.60531H8.03654V1.49813C8.03654 1.55708 8.08478 1.60531 8.14373 1.60531H8.03654V2.57H9.00123V1.49813C9.00123 1.02516 8.6167 0.640625 8.14373 0.640625H3.85623C3.38327 0.640625 2.99873 1.02516 2.99873 1.49813V2.57H3.96342V1.60531ZM10.7162 2.57H1.28373C1.04658 2.57 0.85498 2.7616 0.85498 2.99875V3.4275C0.85498 3.48645 0.903215 3.53469 0.962168 3.53469H1.77143L2.10238 10.5421C2.12381 10.999 2.50165 11.3594 2.95854 11.3594H9.04143C9.49965 11.3594 9.87615 11.0003 9.89759 10.5421L10.2285 3.53469H11.0378C11.0967 3.53469 11.145 3.48645 11.145 3.4275V2.99875C11.145 2.7616 10.9534 2.57 10.7162 2.57ZM8.93826 10.3947H3.0617L2.73746 3.53469H9.2625L8.93826 10.3947Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                              <td >
                                Oval
                              </td>
                              <td>
                                <div className="d-flex align-items-center  action-btn-column account-setting-btn">
                                  <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={handleshowEditNewShape}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M7.11555 3.29492L0.856689 9.55335V11.1433H2.44669L8.70512 4.88449L7.11555 3.29492Z" />
                                      <path d="M10.8134 1.18661C10.6025 0.975829 10.3166 0.857422 10.0184 0.857422C9.72023 0.857422 9.43427 0.975829 9.22339 1.18661L7.72339 2.68875L9.31296 4.27832L10.813 2.77832C10.9176 2.6739 11.0007 2.54987 11.0573 2.41332C11.114 2.27677 11.1432 2.13039 11.1432 1.98256C11.1433 1.83472 11.1141 1.68832 11.0576 1.55174C11.001 1.41517 10.918 1.29109 10.8134 1.18661Z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger "
                                    onClick={handleshowDeleteNewShape}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M3.96342 1.60531H3.85623C3.91518 1.60531 3.96342 1.55708 3.96342 1.49813V1.60531H8.03654V1.49813C8.03654 1.55708 8.08478 1.60531 8.14373 1.60531H8.03654V2.57H9.00123V1.49813C9.00123 1.02516 8.6167 0.640625 8.14373 0.640625H3.85623C3.38327 0.640625 2.99873 1.02516 2.99873 1.49813V2.57H3.96342V1.60531ZM10.7162 2.57H1.28373C1.04658 2.57 0.85498 2.7616 0.85498 2.99875V3.4275C0.85498 3.48645 0.903215 3.53469 0.962168 3.53469H1.77143L2.10238 10.5421C2.12381 10.999 2.50165 11.3594 2.95854 11.3594H9.04143C9.49965 11.3594 9.87615 11.0003 9.89759 10.5421L10.2285 3.53469H11.0378C11.0967 3.53469 11.145 3.48645 11.145 3.4275V2.99875C11.145 2.7616 10.9534 2.57 10.7162 2.57ZM8.93826 10.3947H3.0617L2.73746 3.53469H9.2625L8.93826 10.3947Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Emerald</td>
                              <td>
                                <div className="d-flex align-items-center  action-btn-column account-setting-btn">
                                  <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={handleshowEditNewStone}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M7.11555 3.29492L0.856689 9.55335V11.1433H2.44669L8.70512 4.88449L7.11555 3.29492Z" />
                                      <path d="M10.8134 1.18661C10.6025 0.975829 10.3166 0.857422 10.0184 0.857422C9.72023 0.857422 9.43427 0.975829 9.22339 1.18661L7.72339 2.68875L9.31296 4.27832L10.813 2.77832C10.9176 2.6739 11.0007 2.54987 11.0573 2.41332C11.114 2.27677 11.1432 2.13039 11.1432 1.98256C11.1433 1.83472 11.1141 1.68832 11.0576 1.55174C11.001 1.41517 10.918 1.29109 10.8134 1.18661Z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger "
                                    onClick={handleshowDeleteNewStone}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M3.96342 1.60531H3.85623C3.91518 1.60531 3.96342 1.55708 3.96342 1.49813V1.60531H8.03654V1.49813C8.03654 1.55708 8.08478 1.60531 8.14373 1.60531H8.03654V2.57H9.00123V1.49813C9.00123 1.02516 8.6167 0.640625 8.14373 0.640625H3.85623C3.38327 0.640625 2.99873 1.02516 2.99873 1.49813V2.57H3.96342V1.60531ZM10.7162 2.57H1.28373C1.04658 2.57 0.85498 2.7616 0.85498 2.99875V3.4275C0.85498 3.48645 0.903215 3.53469 0.962168 3.53469H1.77143L2.10238 10.5421C2.12381 10.999 2.50165 11.3594 2.95854 11.3594H9.04143C9.49965 11.3594 9.87615 11.0003 9.89759 10.5421L10.2285 3.53469H11.0378C11.0967 3.53469 11.145 3.48645 11.145 3.4275V2.99875C11.145 2.7616 10.9534 2.57 10.7162 2.57ZM8.93826 10.3947H3.0617L2.73746 3.53469H9.2625L8.93826 10.3947Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                              <td >
                                Oval
                              </td>
                              <td>
                                <div className="d-flex align-items-center  action-btn-column account-setting-btn">
                                  <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={handleshowEditNewShape}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M7.11555 3.29492L0.856689 9.55335V11.1433H2.44669L8.70512 4.88449L7.11555 3.29492Z" />
                                      <path d="M10.8134 1.18661C10.6025 0.975829 10.3166 0.857422 10.0184 0.857422C9.72023 0.857422 9.43427 0.975829 9.22339 1.18661L7.72339 2.68875L9.31296 4.27832L10.813 2.77832C10.9176 2.6739 11.0007 2.54987 11.0573 2.41332C11.114 2.27677 11.1432 2.13039 11.1432 1.98256C11.1433 1.83472 11.1141 1.68832 11.0576 1.55174C11.001 1.41517 10.918 1.29109 10.8134 1.18661Z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger "
                                    onClick={handleshowDeleteNewShape}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M3.96342 1.60531H3.85623C3.91518 1.60531 3.96342 1.55708 3.96342 1.49813V1.60531H8.03654V1.49813C8.03654 1.55708 8.08478 1.60531 8.14373 1.60531H8.03654V2.57H9.00123V1.49813C9.00123 1.02516 8.6167 0.640625 8.14373 0.640625H3.85623C3.38327 0.640625 2.99873 1.02516 2.99873 1.49813V2.57H3.96342V1.60531ZM10.7162 2.57H1.28373C1.04658 2.57 0.85498 2.7616 0.85498 2.99875V3.4275C0.85498 3.48645 0.903215 3.53469 0.962168 3.53469H1.77143L2.10238 10.5421C2.12381 10.999 2.50165 11.3594 2.95854 11.3594H9.04143C9.49965 11.3594 9.87615 11.0003 9.89759 10.5421L10.2285 3.53469H11.0378C11.0967 3.53469 11.145 3.48645 11.145 3.4275V2.99875C11.145 2.7616 10.9534 2.57 10.7162 2.57ZM8.93826 10.3947H3.0617L2.73746 3.53469H9.2625L8.93826 10.3947Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Emerald</td>
                              <td>
                                <div className="d-flex align-items-center  action-btn-column account-setting-btn">
                                  <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={handleshowEditNewStone}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M7.11555 3.29492L0.856689 9.55335V11.1433H2.44669L8.70512 4.88449L7.11555 3.29492Z" />
                                      <path d="M10.8134 1.18661C10.6025 0.975829 10.3166 0.857422 10.0184 0.857422C9.72023 0.857422 9.43427 0.975829 9.22339 1.18661L7.72339 2.68875L9.31296 4.27832L10.813 2.77832C10.9176 2.6739 11.0007 2.54987 11.0573 2.41332C11.114 2.27677 11.1432 2.13039 11.1432 1.98256C11.1433 1.83472 11.1141 1.68832 11.0576 1.55174C11.001 1.41517 10.918 1.29109 10.8134 1.18661Z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger "
                                    onClick={handleshowDeleteNewStone}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M3.96342 1.60531H3.85623C3.91518 1.60531 3.96342 1.55708 3.96342 1.49813V1.60531H8.03654V1.49813C8.03654 1.55708 8.08478 1.60531 8.14373 1.60531H8.03654V2.57H9.00123V1.49813C9.00123 1.02516 8.6167 0.640625 8.14373 0.640625H3.85623C3.38327 0.640625 2.99873 1.02516 2.99873 1.49813V2.57H3.96342V1.60531ZM10.7162 2.57H1.28373C1.04658 2.57 0.85498 2.7616 0.85498 2.99875V3.4275C0.85498 3.48645 0.903215 3.53469 0.962168 3.53469H1.77143L2.10238 10.5421C2.12381 10.999 2.50165 11.3594 2.95854 11.3594H9.04143C9.49965 11.3594 9.87615 11.0003 9.89759 10.5421L10.2285 3.53469H11.0378C11.0967 3.53469 11.145 3.48645 11.145 3.4275V2.99875C11.145 2.7616 10.9534 2.57 10.7162 2.57ZM8.93826 10.3947H3.0617L2.73746 3.53469H9.2625L8.93826 10.3947Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                              <td >
                                Oval
                              </td>
                              <td>
                                <div className="d-flex align-items-center  action-btn-column account-setting-btn">
                                  <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={handleshowEditNewShape}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M7.11555 3.29492L0.856689 9.55335V11.1433H2.44669L8.70512 4.88449L7.11555 3.29492Z" />
                                      <path d="M10.8134 1.18661C10.6025 0.975829 10.3166 0.857422 10.0184 0.857422C9.72023 0.857422 9.43427 0.975829 9.22339 1.18661L7.72339 2.68875L9.31296 4.27832L10.813 2.77832C10.9176 2.6739 11.0007 2.54987 11.0573 2.41332C11.114 2.27677 11.1432 2.13039 11.1432 1.98256C11.1433 1.83472 11.1141 1.68832 11.0576 1.55174C11.001 1.41517 10.918 1.29109 10.8134 1.18661Z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger "
                                    onClick={handleshowDeleteNewShape}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M3.96342 1.60531H3.85623C3.91518 1.60531 3.96342 1.55708 3.96342 1.49813V1.60531H8.03654V1.49813C8.03654 1.55708 8.08478 1.60531 8.14373 1.60531H8.03654V2.57H9.00123V1.49813C9.00123 1.02516 8.6167 0.640625 8.14373 0.640625H3.85623C3.38327 0.640625 2.99873 1.02516 2.99873 1.49813V2.57H3.96342V1.60531ZM10.7162 2.57H1.28373C1.04658 2.57 0.85498 2.7616 0.85498 2.99875V3.4275C0.85498 3.48645 0.903215 3.53469 0.962168 3.53469H1.77143L2.10238 10.5421C2.12381 10.999 2.50165 11.3594 2.95854 11.3594H9.04143C9.49965 11.3594 9.87615 11.0003 9.89759 10.5421L10.2285 3.53469H11.0378C11.0967 3.53469 11.145 3.48645 11.145 3.4275V2.99875C11.145 2.7616 10.9534 2.57 10.7162 2.57ZM8.93826 10.3947H3.0617L2.73746 3.53469H9.2625L8.93826 10.3947Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Emerald</td>
                              <td>
                                <div className="d-flex align-items-center  action-btn-column account-setting-btn">
                                  <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={handleshowEditNewStone}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M7.11555 3.29492L0.856689 9.55335V11.1433H2.44669L8.70512 4.88449L7.11555 3.29492Z" />
                                      <path d="M10.8134 1.18661C10.6025 0.975829 10.3166 0.857422 10.0184 0.857422C9.72023 0.857422 9.43427 0.975829 9.22339 1.18661L7.72339 2.68875L9.31296 4.27832L10.813 2.77832C10.9176 2.6739 11.0007 2.54987 11.0573 2.41332C11.114 2.27677 11.1432 2.13039 11.1432 1.98256C11.1433 1.83472 11.1141 1.68832 11.0576 1.55174C11.001 1.41517 10.918 1.29109 10.8134 1.18661Z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger "
                                    onClick={handleshowDeleteNewStone}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M3.96342 1.60531H3.85623C3.91518 1.60531 3.96342 1.55708 3.96342 1.49813V1.60531H8.03654V1.49813C8.03654 1.55708 8.08478 1.60531 8.14373 1.60531H8.03654V2.57H9.00123V1.49813C9.00123 1.02516 8.6167 0.640625 8.14373 0.640625H3.85623C3.38327 0.640625 2.99873 1.02516 2.99873 1.49813V2.57H3.96342V1.60531ZM10.7162 2.57H1.28373C1.04658 2.57 0.85498 2.7616 0.85498 2.99875V3.4275C0.85498 3.48645 0.903215 3.53469 0.962168 3.53469H1.77143L2.10238 10.5421C2.12381 10.999 2.50165 11.3594 2.95854 11.3594H9.04143C9.49965 11.3594 9.87615 11.0003 9.89759 10.5421L10.2285 3.53469H11.0378C11.0967 3.53469 11.145 3.48645 11.145 3.4275V2.99875C11.145 2.7616 10.9534 2.57 10.7162 2.57ZM8.93826 10.3947H3.0617L2.73746 3.53469H9.2625L8.93826 10.3947Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                              <td >
                                Oval
                              </td>
                              <td>
                                <div className="d-flex align-items-center  action-btn-column account-setting-btn">
                                  <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={handleshowEditNewShape}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M7.11555 3.29492L0.856689 9.55335V11.1433H2.44669L8.70512 4.88449L7.11555 3.29492Z" />
                                      <path d="M10.8134 1.18661C10.6025 0.975829 10.3166 0.857422 10.0184 0.857422C9.72023 0.857422 9.43427 0.975829 9.22339 1.18661L7.72339 2.68875L9.31296 4.27832L10.813 2.77832C10.9176 2.6739 11.0007 2.54987 11.0573 2.41332C11.114 2.27677 11.1432 2.13039 11.1432 1.98256C11.1433 1.83472 11.1141 1.68832 11.0576 1.55174C11.001 1.41517 10.918 1.29109 10.8134 1.18661Z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger "
                                    onClick={handleshowDeleteNewShape}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M3.96342 1.60531H3.85623C3.91518 1.60531 3.96342 1.55708 3.96342 1.49813V1.60531H8.03654V1.49813C8.03654 1.55708 8.08478 1.60531 8.14373 1.60531H8.03654V2.57H9.00123V1.49813C9.00123 1.02516 8.6167 0.640625 8.14373 0.640625H3.85623C3.38327 0.640625 2.99873 1.02516 2.99873 1.49813V2.57H3.96342V1.60531ZM10.7162 2.57H1.28373C1.04658 2.57 0.85498 2.7616 0.85498 2.99875V3.4275C0.85498 3.48645 0.903215 3.53469 0.962168 3.53469H1.77143L2.10238 10.5421C2.12381 10.999 2.50165 11.3594 2.95854 11.3594H9.04143C9.49965 11.3594 9.87615 11.0003 9.89759 10.5421L10.2285 3.53469H11.0378C11.0967 3.53469 11.145 3.48645 11.145 3.4275V2.99875C11.145 2.7616 10.9534 2.57 10.7162 2.57ZM8.93826 10.3947H3.0617L2.73746 3.53469H9.2625L8.93826 10.3947Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Emerald</td>
                              <td>
                                <div className="d-flex align-items-center  action-btn-column account-setting-btn">
                                  <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={handleshowEditNewStone}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M7.11555 3.29492L0.856689 9.55335V11.1433H2.44669L8.70512 4.88449L7.11555 3.29492Z" />
                                      <path d="M10.8134 1.18661C10.6025 0.975829 10.3166 0.857422 10.0184 0.857422C9.72023 0.857422 9.43427 0.975829 9.22339 1.18661L7.72339 2.68875L9.31296 4.27832L10.813 2.77832C10.9176 2.6739 11.0007 2.54987 11.0573 2.41332C11.114 2.27677 11.1432 2.13039 11.1432 1.98256C11.1433 1.83472 11.1141 1.68832 11.0576 1.55174C11.001 1.41517 10.918 1.29109 10.8134 1.18661Z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger "
                                    onClick={handleshowDeleteNewStone}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M3.96342 1.60531H3.85623C3.91518 1.60531 3.96342 1.55708 3.96342 1.49813V1.60531H8.03654V1.49813C8.03654 1.55708 8.08478 1.60531 8.14373 1.60531H8.03654V2.57H9.00123V1.49813C9.00123 1.02516 8.6167 0.640625 8.14373 0.640625H3.85623C3.38327 0.640625 2.99873 1.02516 2.99873 1.49813V2.57H3.96342V1.60531ZM10.7162 2.57H1.28373C1.04658 2.57 0.85498 2.7616 0.85498 2.99875V3.4275C0.85498 3.48645 0.903215 3.53469 0.962168 3.53469H1.77143L2.10238 10.5421C2.12381 10.999 2.50165 11.3594 2.95854 11.3594H9.04143C9.49965 11.3594 9.87615 11.0003 9.89759 10.5421L10.2285 3.53469H11.0378C11.0967 3.53469 11.145 3.48645 11.145 3.4275V2.99875C11.145 2.7616 10.9534 2.57 10.7162 2.57ZM8.93826 10.3947H3.0617L2.73746 3.53469H9.2625L8.93826 10.3947Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                              <td >
                                Oval
                              </td>
                              <td>
                                <div className="d-flex align-items-center  action-btn-column account-setting-btn">
                                  <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={handleshowEditNewShape}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M7.11555 3.29492L0.856689 9.55335V11.1433H2.44669L8.70512 4.88449L7.11555 3.29492Z" />
                                      <path d="M10.8134 1.18661C10.6025 0.975829 10.3166 0.857422 10.0184 0.857422C9.72023 0.857422 9.43427 0.975829 9.22339 1.18661L7.72339 2.68875L9.31296 4.27832L10.813 2.77832C10.9176 2.6739 11.0007 2.54987 11.0573 2.41332C11.114 2.27677 11.1432 2.13039 11.1432 1.98256C11.1433 1.83472 11.1141 1.68832 11.0576 1.55174C11.001 1.41517 10.918 1.29109 10.8134 1.18661Z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger "
                                    onClick={handleshowDeleteNewShape}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M3.96342 1.60531H3.85623C3.91518 1.60531 3.96342 1.55708 3.96342 1.49813V1.60531H8.03654V1.49813C8.03654 1.55708 8.08478 1.60531 8.14373 1.60531H8.03654V2.57H9.00123V1.49813C9.00123 1.02516 8.6167 0.640625 8.14373 0.640625H3.85623C3.38327 0.640625 2.99873 1.02516 2.99873 1.49813V2.57H3.96342V1.60531ZM10.7162 2.57H1.28373C1.04658 2.57 0.85498 2.7616 0.85498 2.99875V3.4275C0.85498 3.48645 0.903215 3.53469 0.962168 3.53469H1.77143L2.10238 10.5421C2.12381 10.999 2.50165 11.3594 2.95854 11.3594H9.04143C9.49965 11.3594 9.87615 11.0003 9.89759 10.5421L10.2285 3.53469H11.0378C11.0967 3.53469 11.145 3.48645 11.145 3.4275V2.99875C11.145 2.7616 10.9534 2.57 10.7162 2.57ZM8.93826 10.3947H3.0617L2.73746 3.53469H9.2625L8.93826 10.3947Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Emerald</td>
                              <td>
                                <div className="d-flex align-items-center  action-btn-column account-setting-btn">
                                  <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={handleshowEditNewStone}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M7.11555 3.29492L0.856689 9.55335V11.1433H2.44669L8.70512 4.88449L7.11555 3.29492Z" />
                                      <path d="M10.8134 1.18661C10.6025 0.975829 10.3166 0.857422 10.0184 0.857422C9.72023 0.857422 9.43427 0.975829 9.22339 1.18661L7.72339 2.68875L9.31296 4.27832L10.813 2.77832C10.9176 2.6739 11.0007 2.54987 11.0573 2.41332C11.114 2.27677 11.1432 2.13039 11.1432 1.98256C11.1433 1.83472 11.1141 1.68832 11.0576 1.55174C11.001 1.41517 10.918 1.29109 10.8134 1.18661Z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger "
                                    onClick={handleshowDeleteNewStone}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M3.96342 1.60531H3.85623C3.91518 1.60531 3.96342 1.55708 3.96342 1.49813V1.60531H8.03654V1.49813C8.03654 1.55708 8.08478 1.60531 8.14373 1.60531H8.03654V2.57H9.00123V1.49813C9.00123 1.02516 8.6167 0.640625 8.14373 0.640625H3.85623C3.38327 0.640625 2.99873 1.02516 2.99873 1.49813V2.57H3.96342V1.60531ZM10.7162 2.57H1.28373C1.04658 2.57 0.85498 2.7616 0.85498 2.99875V3.4275C0.85498 3.48645 0.903215 3.53469 0.962168 3.53469H1.77143L2.10238 10.5421C2.12381 10.999 2.50165 11.3594 2.95854 11.3594H9.04143C9.49965 11.3594 9.87615 11.0003 9.89759 10.5421L10.2285 3.53469H11.0378C11.0967 3.53469 11.145 3.48645 11.145 3.4275V2.99875C11.145 2.7616 10.9534 2.57 10.7162 2.57ZM8.93826 10.3947H3.0617L2.73746 3.53469H9.2625L8.93826 10.3947Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                              <td >
                                Oval
                              </td>
                              <td>
                                <div className="d-flex align-items-center  action-btn-column account-setting-btn">
                                  <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={handleshowEditNewShape}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M7.11555 3.29492L0.856689 9.55335V11.1433H2.44669L8.70512 4.88449L7.11555 3.29492Z" />
                                      <path d="M10.8134 1.18661C10.6025 0.975829 10.3166 0.857422 10.0184 0.857422C9.72023 0.857422 9.43427 0.975829 9.22339 1.18661L7.72339 2.68875L9.31296 4.27832L10.813 2.77832C10.9176 2.6739 11.0007 2.54987 11.0573 2.41332C11.114 2.27677 11.1432 2.13039 11.1432 1.98256C11.1433 1.83472 11.1141 1.68832 11.0576 1.55174C11.001 1.41517 10.918 1.29109 10.8134 1.18661Z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger "
                                    onClick={handleshowDeleteNewShape}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M3.96342 1.60531H3.85623C3.91518 1.60531 3.96342 1.55708 3.96342 1.49813V1.60531H8.03654V1.49813C8.03654 1.55708 8.08478 1.60531 8.14373 1.60531H8.03654V2.57H9.00123V1.49813C9.00123 1.02516 8.6167 0.640625 8.14373 0.640625H3.85623C3.38327 0.640625 2.99873 1.02516 2.99873 1.49813V2.57H3.96342V1.60531ZM10.7162 2.57H1.28373C1.04658 2.57 0.85498 2.7616 0.85498 2.99875V3.4275C0.85498 3.48645 0.903215 3.53469 0.962168 3.53469H1.77143L2.10238 10.5421C2.12381 10.999 2.50165 11.3594 2.95854 11.3594H9.04143C9.49965 11.3594 9.87615 11.0003 9.89759 10.5421L10.2285 3.53469H11.0378C11.0967 3.53469 11.145 3.48645 11.145 3.4275V2.99875C11.145 2.7616 10.9534 2.57 10.7162 2.57ZM8.93826 10.3947H3.0617L2.73746 3.53469H9.2625L8.93826 10.3947Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Emerald</td>
                              <td>
                                <div className="d-flex align-items-center  action-btn-column account-setting-btn">
                                  <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={handleshowEditNewStone}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M7.11555 3.29492L0.856689 9.55335V11.1433H2.44669L8.70512 4.88449L7.11555 3.29492Z" />
                                      <path d="M10.8134 1.18661C10.6025 0.975829 10.3166 0.857422 10.0184 0.857422C9.72023 0.857422 9.43427 0.975829 9.22339 1.18661L7.72339 2.68875L9.31296 4.27832L10.813 2.77832C10.9176 2.6739 11.0007 2.54987 11.0573 2.41332C11.114 2.27677 11.1432 2.13039 11.1432 1.98256C11.1433 1.83472 11.1141 1.68832 11.0576 1.55174C11.001 1.41517 10.918 1.29109 10.8134 1.18661Z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger "
                                    onClick={handleshowDeleteNewStone}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M3.96342 1.60531H3.85623C3.91518 1.60531 3.96342 1.55708 3.96342 1.49813V1.60531H8.03654V1.49813C8.03654 1.55708 8.08478 1.60531 8.14373 1.60531H8.03654V2.57H9.00123V1.49813C9.00123 1.02516 8.6167 0.640625 8.14373 0.640625H3.85623C3.38327 0.640625 2.99873 1.02516 2.99873 1.49813V2.57H3.96342V1.60531ZM10.7162 2.57H1.28373C1.04658 2.57 0.85498 2.7616 0.85498 2.99875V3.4275C0.85498 3.48645 0.903215 3.53469 0.962168 3.53469H1.77143L2.10238 10.5421C2.12381 10.999 2.50165 11.3594 2.95854 11.3594H9.04143C9.49965 11.3594 9.87615 11.0003 9.89759 10.5421L10.2285 3.53469H11.0378C11.0967 3.53469 11.145 3.48645 11.145 3.4275V2.99875C11.145 2.7616 10.9534 2.57 10.7162 2.57ZM8.93826 10.3947H3.0617L2.73746 3.53469H9.2625L8.93826 10.3947Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                              <td >
                                Oval
                              </td>
                              <td>
                                <div className="d-flex align-items-center  action-btn-column account-setting-btn">
                                  <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={handleshowEditNewShape}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M7.11555 3.29492L0.856689 9.55335V11.1433H2.44669L8.70512 4.88449L7.11555 3.29492Z" />
                                      <path d="M10.8134 1.18661C10.6025 0.975829 10.3166 0.857422 10.0184 0.857422C9.72023 0.857422 9.43427 0.975829 9.22339 1.18661L7.72339 2.68875L9.31296 4.27832L10.813 2.77832C10.9176 2.6739 11.0007 2.54987 11.0573 2.41332C11.114 2.27677 11.1432 2.13039 11.1432 1.98256C11.1433 1.83472 11.1141 1.68832 11.0576 1.55174C11.001 1.41517 10.918 1.29109 10.8134 1.18661Z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger "
                                    onClick={handleshowDeleteNewShape}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M3.96342 1.60531H3.85623C3.91518 1.60531 3.96342 1.55708 3.96342 1.49813V1.60531H8.03654V1.49813C8.03654 1.55708 8.08478 1.60531 8.14373 1.60531H8.03654V2.57H9.00123V1.49813C9.00123 1.02516 8.6167 0.640625 8.14373 0.640625H3.85623C3.38327 0.640625 2.99873 1.02516 2.99873 1.49813V2.57H3.96342V1.60531ZM10.7162 2.57H1.28373C1.04658 2.57 0.85498 2.7616 0.85498 2.99875V3.4275C0.85498 3.48645 0.903215 3.53469 0.962168 3.53469H1.77143L2.10238 10.5421C2.12381 10.999 2.50165 11.3594 2.95854 11.3594H9.04143C9.49965 11.3594 9.87615 11.0003 9.89759 10.5421L10.2285 3.53469H11.0378C11.0967 3.53469 11.145 3.48645 11.145 3.4275V2.99875C11.145 2.7616 10.9534 2.57 10.7162 2.57ZM8.93826 10.3947H3.0617L2.73746 3.53469H9.2625L8.93826 10.3947Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          
                            
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                  </Row>
                </Tab.Container>
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
      {/* // add-new-stone-modal */}
      <Modal
        className="modal-custom"
        show={showAddNewStone}
        onHide={handleAddNewStone}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Stone </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-30 pb-30">
          <div className="d-fex flex-column align-items-center  custom-card">
            {/* <div className="page-heading">
              <h2>Are you sure you want to delete this Category? </h2>
            </div> */}
            <Form>
              <Form.Group
                className="mb-24"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="custom-label">
                  Stone Name
                  {/* <span className="text-primary">*</span> */}
                </Form.Label>
                <Form.Control type="text" placeholder="Stone Name" />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="add-btn  bg-primary-subtle me-12"
            onClick={handleAddNewStone}
          >
            Cancel
          </Button>
          <Button
            variant="success"
            className="add-btn"
            onClick={handleAddNewStone}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {/* // add-new-stone-modal-end */}

      {/* // add-new-shape-modal */}
      <Modal
        className="modal-custom"
        show={showAddNewShape}
        onHide={handleAddNewShape}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Shape </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-30 pb-30">
          <div className="d-fex flex-column align-items-center  custom-card">
            {/* <div className="page-heading">
              <h2>Are you sure you want to delete this Category? </h2>
            </div> */}
            <Form>
              <Form.Group
                className="mb-24"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="custom-label">
                  Shape Name
                  {/* <span className="text-primary">*</span> */}
                </Form.Label>
                <Form.Control type="text" placeholder="Shape Name" />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="add-btn  bg-primary-subtle me-12"
            onClick={handleAddNewShape}
          >
            Cancel
          </Button>
          <Button
            variant="success"
            className="add-btn"
            onClick={handleAddNewShape}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {/* // add-new-shape-modal-end */}

      {/* // edit-new-stone-modal */}
      <Modal
        className="modal-custom"
        show={showEditNewStone}
        onHide={handleEditNewStone}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Stone </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-30 pb-30">
          <div className="d-fex flex-column align-items-center  custom-card">
            {/* <div className="page-heading">
              <h2>Are you sure you want to delete this Category? </h2>
            </div> */}
            <Form>
              <Form.Group
                className="mb-24"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="custom-label">
                  Edit Stone
                  {/* <span className="text-primary">*</span> */}
                </Form.Label>
                <Form.Control type="text" placeholder="Edit Stone" />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="add-btn  bg-primary-subtle me-12"
            onClick={handleEditNewStone}
          >
            Cancel
          </Button>
          <Button
            variant="success"
            className="add-btn"
            onClick={handleEditNewStone}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {/* // edit-new-stone-modal-end */}

      {/* // delete-new-stone-modal */}
      <Modal
        className="modal-custom"
        show={showDeleteNewStone}
        onHide={handleDeleteNewStone}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Emerald Stone </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-30 pb-30">
          <div className="d-fex flex-column align-items-center  custom-card">
            <div className="page-heading">
              <h2>Do you really want to delete this? </h2>
            </div>
            {/* <Form>
              <Form.Group
                className="mb-24"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="custom-label">
                Edit Stone
                  <span className="text-primary">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Edit Stone" />
              </Form.Group>
            </Form> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="add-btn  bg-primary-subtle me-12"
            onClick={handleDeleteNewStone}
          >
            No
          </Button>
          <Button
            variant="success"
            className="add-btn"
            onClick={handleDeleteNewStone}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {/* // showEditNewShape-modal-end */}
      {/* // edit-new-stone-modal */}
      <Modal
        className="modal-custom"
        show={showEditNewShape}
        onHide={handleEditNewShape}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Shape</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-30 pb-30">
          <div className="d-fex flex-column align-items-center  custom-card">
            {/* <div className="page-heading">
              <h2>Are you sure you want to delete this Category? </h2>
            </div> */}
            <Form>
              <Form.Group
                className="mb-24"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="custom-label">
                  Shape Name
                  {/* <span className="text-primary">*</span> */}
                </Form.Label>
                <Form.Control type="text" placeholder="Shape Name" />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="add-btn  bg-primary-subtle me-12"
            onClick={handleEditNewShape}
          >
            Cancel
          </Button>
          <Button
            variant="success"
            className="add-btn"
            onClick={handleEditNewShape}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {/* // edit-new-stone-modal-end */}

      {/* // showdelteNewShape-modal */}
      <Modal
        className="modal-custom"
        show={showDeleteNewShape}
        onHide={handleDeleteNewShape}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Oval Shape</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-30 pb-30">
          <div className="d-fex flex-column align-items-center  custom-card">
            <div className="page-heading">
              <h2>Do you really want to delete this?</h2>
            </div>
            {/* <Form>
              <Form.Group
                className="mb-24"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="custom-label">
                Shape Name
                  <span className="text-primary">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="    Shape Name" />
              </Form.Group>
            </Form> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="add-btn  bg-primary-subtle me-12"
            onClick={handleDeleteNewShape}
          >
            No
          </Button>
          <Button
            variant="success"
            className="add-btn"
            onClick={handleDeleteNewShape}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* // delete-new-shape-modal-end */}
    </div>
  );
}
