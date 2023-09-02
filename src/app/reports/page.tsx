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

export default function Reports() {
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
                  <Col lg={6}>
                    <div className="page-heading d-flex align-items-center flex-wrap ">
                      <h2 className="me-4">Reports</h2>

                      <Form className="   serach-category ">
                        <Form.Group>
                          <Form.Control type="text" placeholder="Search" />
                        </Form.Group>
                      </Form>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <InputGroup className="justify-content-lg-end mt-12 mt-lg-0 header-btn-group">
                      <button
                        type="button"
                        className="btn btn-with-icon  add-btn bg-primary-subtle"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_347_14051)">
                            <path
                              d="M11.9827 4.7641C11.7614 4.7201 11.5807 4.58211 11.4881 4.38477C10.4534 2.20411 8.05939 0.984772 5.66472 1.42611C3.48339 1.82611 1.77339 3.56744 1.40872 5.76011C1.30072 6.40744 1.30872 7.05544 1.43072 7.68677C1.47072 7.89277 1.38206 8.12211 1.20006 8.28744C0.436723 8.98144 -0.000610352 9.97011 -0.000610352 11.0008C-0.000610352 13.0221 1.64406 14.6674 3.66606 14.6674H10.9994C13.7567 14.6674 15.9994 12.4248 15.9994 9.66744C15.9994 7.29077 14.3101 5.22877 11.9821 4.76477L11.9827 4.7641ZM10.0807 9.80544L8.27606 11.6101C8.01806 11.8681 7.67872 11.9981 7.33939 11.9994L7.33339 12.0008L7.32739 11.9994C6.98806 11.9981 6.64872 11.8681 6.39072 11.6101L4.58606 9.80544C4.32539 9.54477 4.32539 9.12344 4.58606 8.86277C4.84672 8.6021 5.26806 8.6021 5.52872 8.86277L6.66672 10.0008V6.66744C6.66672 6.29877 6.96539 6.00077 7.33339 6.00077C7.70139 6.00077 8.00006 6.29877 8.00006 6.66744V10.0008L9.13806 8.86277C9.39872 8.6021 9.82006 8.6021 10.0807 8.86277C10.3414 9.12344 10.3414 9.54477 10.0807 9.80544Z"
                             
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_347_14051">
                              <rect width="16" height="16"  />
                            </clipPath>
                          </defs>
                        </svg>
                        Export
                      </button>
                      <button
                        type="button"
                        className="btn btn-with-icon  add-btn bg-primary-subtle"
                      >
                       <svg width="17" height="16" viewBox="0 0 17 16"  xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_347_14057)">
<path d="M13.1667 2.66667C13.1667 1.95942 12.8858 1.28115 12.3857 0.781049C11.8856 0.280952 11.2073 0 10.5 0L6.50004 0C5.7928 0 5.11452 0.280952 4.61442 0.781049C4.11433 1.28115 3.83337 1.95942 3.83337 2.66667V3.33333H13.1667V2.66667Z" />
<path d="M11.1667 10H5.83337C4.7288 10 3.83337 10.8954 3.83337 12V14C3.83337 15.1046 4.7288 16 5.83337 16H11.1667C12.2713 16 13.1667 15.1046 13.1667 14V12C13.1667 10.8954 12.2713 10 11.1667 10Z" />
<path d="M13.1667 4.6665H3.83333C2.9496 4.66756 2.10237 5.01909 1.47748 5.64398C0.852588 6.26888 0.501059 7.11611 0.5 7.99984L0.5 10.6665C0.500852 11.3143 0.69047 11.9479 1.04567 12.4897C1.40086 13.0315 1.90624 13.458 2.5 13.7172V11.9998C2.50106 11.1161 2.85259 10.2689 3.47748 9.64398C4.10237 9.01909 4.9496 8.66756 5.83333 8.6665H11.1667C12.0504 8.66756 12.8976 9.01909 13.5225 9.64398C14.1474 10.2689 14.4989 11.1161 14.5 11.9998V13.7172C15.0938 13.458 15.5991 13.0315 15.9543 12.4897C16.3095 11.9479 16.4991 11.3143 16.5 10.6665V7.99984C16.4989 7.11611 16.1474 6.26888 15.5225 5.64398C14.8976 5.01909 14.0504 4.66756 13.1667 4.6665ZM12.5 7.33317H11.1667C10.9899 7.33317 10.8203 7.26293 10.6953 7.13791C10.5702 7.01288 10.5 6.84331 10.5 6.6665C10.5 6.48969 10.5702 6.32012 10.6953 6.1951C10.8203 6.07008 10.9899 5.99984 11.1667 5.99984H12.5C12.6768 5.99984 12.8464 6.07008 12.9714 6.1951C13.0964 6.32012 13.1667 6.48969 13.1667 6.6665C13.1667 6.84331 13.0964 7.01288 12.9714 7.13791C12.8464 7.26293 12.6768 7.33317 12.5 7.33317Z" />
</g>
<defs>
<clipPath id="clip0_347_14057">
<rect width="16" height="16"  transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>

                        Print
                      </button>
                      <Dropdown>
                        <Dropdown.Toggle
                          className=" light-btn column-btn custom-drop-arrow"
                          variant="light"
                          id="dropdown-basic"
                        >
                          Recent First
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
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="mb-24">
                  <Col md={12}>
                    <div className="filter-section card-column">
                      <Form className="row align-items-end">
                        <Col lg="3" >
                          <Form.Group
                            className="mb-24"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="custom-label">
                            Purchase Report
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Purchase Report"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="3" >
                          <Form.Group
                            className="mb-24"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="custom-label">
                              From
                            </Form.Label>
                            <Form.Control
                              type="date"
                            
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="3" >
                          <Form.Group
                            className="mb-24"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="custom-label">
                              To
                            </Form.Label>
                            <Form.Control
                              type="date"
                            
                            />
                          </Form.Group>
                        </Col>
                       
                        <Col lg="3">
                          <div className="mb-24">
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
                            <th>Company Name</th>
                            <th>Contact Person</th>
                            <th>Phone</th>

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
                            <td>ABC Gems Pvt. LTD.</td>
                            <td>John Doe</td>
                            <td>+91-755-595-7806</td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-company-information"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-company-information"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>ABC Gems Pvt. LTD.</td>
                            <td>John Doe</td>
                            <td>+91-755-595-7806</td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-company-information"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-company-information"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>ABC Gems Pvt. LTD.</td>
                            <td>John Doe</td>
                            <td>+91-755-595-7806</td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-company-information"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-company-information"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>ABC Gems Pvt. LTD.</td>
                            <td>John Doe</td>
                            <td>+91-755-595-7806</td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-company-information"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-company-information"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>ABC Gems Pvt. LTD.</td>
                            <td>John Doe</td>
                            <td>+91-755-595-7806</td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-company-information"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-company-information"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>ABC Gems Pvt. LTD.</td>
                            <td>John Doe</td>
                            <td>+91-755-595-7806</td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-company-information"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-company-information"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>ABC Gems Pvt. LTD.</td>
                            <td>John Doe</td>
                            <td>+91-755-595-7806</td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-company-information"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-company-information"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>ABC Gems Pvt. LTD.</td>
                            <td>John Doe</td>
                            <td>+91-755-595-7806</td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-company-information"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-company-information"
                                  className="btn btn-success"
                                >
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>ABC Gems Pvt. LTD.</td>
                            <td>John Doe</td>
                            <td>+91-755-595-7806</td>

                            <td>
                              <div className="d-flex align-items-center justify-content-center action-btn-column">
                                <Link
                                  href="/edit-company-information"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                                <Link
                                  href="/view-company-information"
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
