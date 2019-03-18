import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    const name = this.props.projectName;
    return (
      <div className="nav-scroller navbar-dark bg-dark shadow-sm">
        <nav className="nav nav-underline">
          <span className="nav-link active text-info">{name}</span>
          <Link className="nav-link text-light" to="/">
            Overview
          </Link>
          <Link className="nav-link text-light" to="/devices">
            Servers
          </Link>
        </nav>
      </div>
    );
  }
}

// Header.propTypes = {
//   projectName: PropTypes.string.isRequired
// };

export default Header;
