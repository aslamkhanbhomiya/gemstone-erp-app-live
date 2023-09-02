"use client";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";

export const NavigationBar = () => {
    const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
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
  )
}
