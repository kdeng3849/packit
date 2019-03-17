import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="nav-scroller bg-white shadow-sm">
      <nav className="nav nav-underline">
        <a className="nav-link active text-info" href="#">
          Project
        </a>
        <Link className="nav-link" to="/">
          Overview
        </Link>
        <Link className="nav-link" to="/devices">
          Devices
        </Link>
        {/* <a className="nav-link" href="#">Explore</a>
                <a className="nav-link" href="#">Suggestions</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a> */}
      </nav>
    </div>
  );
}

export default Header;
