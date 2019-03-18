import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    const name = this.props.projectName;
    return (
      <div className="nav-scroller bg-white shadow-sm">
        <nav className="nav nav-underline">
          <span className="nav-link active text-info">{name}</span>
          <Link className="nav-link" to="/">
            Overview
          </Link>
          <Link className="nav-link" to="/devices">
            Servers
          </Link>
        </nav>
      </div>
    );
  }
}

// PropTypes: validation for properties a component should have
// Todos.propTypes = {
//   todos: PropTypes.array.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired
// }

export default Header;
