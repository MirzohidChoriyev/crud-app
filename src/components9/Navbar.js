import React from "react";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-bars">
          <i className="fa fa-bars"></i>
          <Link to="/alluser">
            <button id="link-btn">All users</button>
          </Link>
          <Link to="/adduser">
            <button id="link-btn">Add users</button>
          </Link>
          <Link to="/cash">
            <button id="link-btn">Cash users</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
