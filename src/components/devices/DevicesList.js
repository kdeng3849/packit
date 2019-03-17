import React, { Component } from "react";
// import PropTypes from 'prop-types';
import DeviceItem from "./DeviceItem";

class DevicesList extends Component {
  render() {
    const devices = this.props.devices.map(device => (
      <DeviceItem key={device.id} device={device} />
    ));
    return this.props.devices.map(device => (
      <DeviceItem key={device.id} device={device} />
    ));
  }
}

// PropTypes: validation for properties a component should have
// Todos.propTypes = {
//   todos: PropTypes.array.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired
// }

export default DevicesList;
