"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} EleganteBee. All rights reserved.
        </p>
        <p className="mb-0">
          Follow us on:
          <a href="https://facebook.com" className="text-light ms-2">Facebook</a> |
          <a href="https://instagram.com" className="text-light ms-2">Instagram</a> |
          <a href="https://twitter.com" className="text-light ms-2">Twitter</a>
        </p>
      </div>
    </footer>
  );
}
