import React from "react";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#004d40" }}
    >
      <div className="container">
        <a className="navbar-brand text-white fw-bold" href="#home">
          Our NGO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#volunteer">
                Volunteer
              </a>
            </li>
            <li className="nav-item">

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
