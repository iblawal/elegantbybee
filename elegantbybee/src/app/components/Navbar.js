"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Brand Logo / Name */}
        <Link href="/" className="navbar-brand fw-bold">
          ElegantebyBee
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {/* Home */}
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>

            {/* Services with Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <Link href="/services" className="dropdown-item">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link href="/request-quote" className="dropdown-item">
                    Request Quote
                  </Link>
                </li>
              </ul>
            </li>

            {/* About */}
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>

            {/* Blog */}
            <li className="nav-item">
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
            </li>

            {/* Media */}
            <li className="nav-item">
              <Link href="/media" className="nav-link">
                Media
              </Link>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
