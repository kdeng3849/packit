import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class DeviceItem extends Component {
  render() {
    const {
      hostname,
      id,
      plan,
      facility,
      state,
      operating_system
    } = this.props.device;
    return (
          <tr key={id} className="border-bottom border-light">
            <th scope="col" className="font-weight-light">
              <Link className="text-decoration-none" to={`/devices/${id}`}>
                <span className="px-4 text-info font-weight-bold">{hostname}</span>
              </Link>
              <p className="px-4"><small>{state}</small></p>
            </th>
            <td className="font-weight-light">
              {plan ? plan.name : ""}
            </td>
            <td className="font-weight-light">
              {facility ? facility.code.toUpperCase() : ""}
            </td>
            <td className="font-weight-light">{operating_system ? operating_system.name : ""}</td>
            <td className="font-weight-light">
              <button
                className="btn btn-sm btn-link text-danger"
                onClick={this.props.deleteDevice.bind(this, id)}
              >
                Delete
              </button>
            </td>
          </tr>
    );
  }
}

DeviceItem.propTypes = {
  device: PropTypes.object.isRequired
};

export default DeviceItem;
