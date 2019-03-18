import React, { Component } from "react";
import PropTypes from 'prop-types';
import DeviceItem from "./DeviceItem";

class DevicesList extends Component {
  render() {
    const devices = this.props.devices.map(device => (
      <DeviceItem key={device.id} device={device} deleteDevice={this.props.deleteDevice} />
    ));
    return (
      <div className="mx-5 my-4 p-3 bg-white rounded shadow-sm text-left">
        <h4 className="px-3 pb-2 mb-0">Devices</h4>
        <hr className="mb-0" />
        {devices}
      </div>
    );
  }
}

DevicesList.propTypes = {
  devices: PropTypes.array.isRequired,
}

export default DevicesList;
