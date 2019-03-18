import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

class DeviceItem extends Component {
  render() {
    const { id, hostname, state } = this.props.device;
    return (
      <div className="media text-muted pt-3">
        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <div className="d-flex justify-content-between align-items-center w-100">
            <Link className="text-decoration-none" to={`/devices/${id}`}>
              <strong className="px-4 text-gray-dark">{hostname}</strong>
            </Link>
            <button className="btn btn-sm btn-link text-danger" onClick={this.props.deleteDevice.bind(this, id)}>
              Delete
            </button>
          </div>
          <small className="px-4 d-block">{state.toUpperCase()}</small>
        </div>
      </div>
    );
  }
}

DeviceItem.propTypes = {
  device: PropTypes.array.isRequired
}

export default DeviceItem;
