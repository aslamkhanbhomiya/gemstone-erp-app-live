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

export default function Users() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showDeleteCategories, setshowDeleteCategories] = useState(false);

  const handleDeleteCategories = () => setshowDeleteCategories(false);
  const handleshowDeleteCategories = () => setshowDeleteCategories(true);

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
                  <Col sm={8}>
                    <div className="page-heading d-flex align-items-center flex-wrap ">
                      <h2 className="me-4">Users</h2>

                      <Form className="   serach-category ">
                        <Form.Group>
                          <Form.Control type="text" placeholder="Search" />
                        </Form.Group>
                      </Form>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <InputGroup className="justify-content-sm-end mt-12 mt-sm-0 header-btn-group">
                      <Link
                        href="/add-new-user"
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

                <Row>
                  <Col lg="12" className="table-list-data">
                    <div className="table-responsive stock-responsive">
                      <Table className="table-list mb-0">
                        <thead>
                          <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th className="text-center">Status</th>

                            <th
                              className=" actions-common-th"
                              style={{ width: "190px" }}
                            >
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Tony</td>
                            <td>Gibson</td>
                            <td>Granville.Turcotte@yahoo.com</td>
                            <td>480-878-3317</td>
                            <td className="text-center">
                              <Form>
                                <Form.Check // prettier-ignore
                                  type="switch"
                                  className="switch-type"
                                />
                              </Form>
                            </td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-user-details"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-user-details"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Tony</td>
                            <td>Gibson</td>
                            <td>Granville.Turcotte@yahoo.com</td>
                            <td>480-878-3317</td>
                            <td className="text-center">
                              <Form>
                                <Form.Check // prettier-ignore
                                  type="switch"
                                  className="switch-type"
                                />
                              </Form>
                            </td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-user-details"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-user-details"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Tony</td>
                            <td>Gibson</td>
                            <td>Granville.Turcotte@yahoo.com</td>
                            <td>480-878-3317</td>
                            <td className="text-center">
                              <Form>
                                <Form.Check // prettier-ignore
                                  type="switch"
                                  className="switch-type"
                                />
                              </Form>
                            </td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-user-details"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-user-details"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Tony</td>
                            <td>Gibson</td>
                            <td>Granville.Turcotte@yahoo.com</td>
                            <td>480-878-3317</td>
                            <td className="text-center">
                              <Form>
                                <Form.Check // prettier-ignore
                                  type="switch"
                                  className="switch-type"
                                />
                              </Form>
                            </td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-user-details"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-user-details"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Tony</td>
                            <td>Gibson</td>
                            <td>Granville.Turcotte@yahoo.com</td>
                            <td>480-878-3317</td>
                            <td className="text-center">
                              <Form>
                                <Form.Check // prettier-ignore
                                  type="switch"
                                  className="switch-type"
                                />
                              </Form>
                            </td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-user-details"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-user-details"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Tony</td>
                            <td>Gibson</td>
                            <td>Granville.Turcotte@yahoo.com</td>
                            <td>480-878-3317</td>
                            <td className="text-center">
                              <Form>
                                <Form.Check // prettier-ignore
                                  type="switch"
                                  className="switch-type"
                                />
                              </Form>
                            </td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-user-details"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-user-details"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Tony</td>
                            <td>Gibson</td>
                            <td>Granville.Turcotte@yahoo.com</td>
                            <td>480-878-3317</td>
                            <td className="text-center">
                              <Form>
                                <Form.Check // prettier-ignore
                                  type="switch"
                                  className="switch-type"
                                />
                              </Form>
                            </td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-user-details"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-user-details"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Tony</td>
                            <td>Gibson</td>
                            <td>Granville.Turcotte@yahoo.com</td>
                            <td>480-878-3317</td>
                            <td className="text-center">
                              <Form>
                                <Form.Check // prettier-ignore
                                  type="switch"
                                  className="switch-type"
                                />
                              </Form>
                            </td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-user-details"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-user-details"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Tony</td>
                            <td>Gibson</td>
                            <td>Granville.Turcotte@yahoo.com</td>
                            <td>480-878-3317</td>
                            <td className="text-center">
                              <Form>
                                <Form.Check // prettier-ignore
                                  type="switch"
                                  className="switch-type"
                                />
                              </Form>
                            </td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-user-details"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-user-details"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
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
        show={showDeleteCategories}
        onHide={handleDeleteCategories}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Emerald Grade A </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-30 pb-30">
          <div className="d-fex flex-column align-items-center justify-content-center text-center">
            <div className="page-heading">
              <h2>Are you sure you want to delete this Category? </h2>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="add-btn  bg-primary-subtle me-12"
            onClick={handleDeleteCategories}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="add-btn"
            onClick={handleDeleteCategories}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      {/* stock-enter-delete-modal-close */}
    </div>
  );
}
