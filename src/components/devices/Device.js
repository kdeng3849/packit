import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Device extends Component {
  render() {
    const { hostname, state } = this.props.device
    return (
        <div className="media text-muted pt-3">
        </div>
    )
  }
}

// PropTypes: validation for properties a component should have
// Todos.propTypes = {
//   todos: PropTypes.array.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired
// }

export default Device;
