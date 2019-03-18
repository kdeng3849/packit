import React, { Component } from "react";
import PropTypes from "prop-types";
import DeviceItem from "./DeviceItem";

class DevicesList extends Component {
  state = {
    filterString: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.filterDevices(this.state.filterString);
    this.setState({ filterString: "" });
  };

  render() {
    const devices = this.props.devices.map(device => (
      <DeviceItem
        key={device.id}
        device={device}
        deleteDevice={this.props.deleteDevice}
      />
    ));
    return (
      <div className="mx-5 my-4 p-3 bg-white rounded shadow-sm text-left">
        <div className="d-flex justify-content-between align-items-end">
          <span className="h4 px-3 pb-2 mb-0">Devices</span>
          <form onSubmit={this.onSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="filterString"
                className="form-control"
                placeholder="Search"
                value={this.state.filterString}
                onChange={this.onChange}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-secondary"
                  type="submit"
                  value="submit"
                >
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <hr className="mb-0" />
        {devices}
      </div>
    );
  }
}

DevicesList.propTypes = {
  devices: PropTypes.array.isRequired
};

export default DevicesList;
