import React, { Component } from "react";
// import PropTypes from 'prop-types';
import DeviceItem from "./DeviceItem";

class DevicesList extends Component {
  render() {
    const devices = this.props.devices.map(device => (
      <DeviceItem key={device.id} device={device} />
    ));
    return (
      <div className="mx-5 my-3 p-3 bg-white rounded shadow-sm text-left">
        <h4 className="px-3 pb-2 mb-0">Devices</h4>
        <hr className="mb-0" />
        {devices}
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

export default DevicesList;
