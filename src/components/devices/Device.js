import React, { Component } from "react";
// import PropTypes from 'prop-types';

class Device extends Component {
  state = {
    device: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`https://api.packet.net/devices/${id}`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "X-Auth-Token": "hD7cM283nx3sNmdYWDKfBpPWwcYyFUYw",
        "Content-Type": "application/json"
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer" // no-referrer, *client
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({ device: response });
      });
  }

  render() {
    const {
      hostname,
      description,
      id,
      switch_uuid,
      plan,
      facility,
      ip_addresses
    } = this.state.device;

    let ips = [];
    if (ip_addresses) {
      ips = ip_addresses
        .filter(ip => ip.management)
        .map(ip => (
          <tr key={ip.id}>
            <td>{ip.address}</td>
            <td>
              {ip.network}/{ip.cidr}
            </td>
            <td>
              {ip.public ? "Public" : "Private"} IPv{ip.address_family}
            </td>
          </tr>
        ));
    }

    return (
      <div className="mx-5 my-3 p-3 bg-white rounded shadow-sm text-left">
        <h4 className="border-bottom border-gray px-3 pb-2 mb-0">{hostname}</h4>
        <div className="col-6 mx-5 my-3 p-3 bg-white rounded shadow-sm text-left">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <th scope="row">Hostname</th>
                <td>{hostname}</td>
              </tr>
              <tr>
                <th scope="row">Description</th>
                <td>{description}</td>
              </tr>
              <tr>
                <th scope="row">ID</th>
                <td>{id}</td>
              </tr>
              <tr>
                <th scope="row">Switch ID</th>
                <td>{switch_uuid}</td>
              </tr>
              <tr>
                <th scope="row">Config</th>
                <td>{plan ? plan.name : ""}</td>
              </tr>
              <tr>
                <th scope="row">Facility</th>
                <td>{facility ? facility.code : ""}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-4 mx-5 my-3 p-3 bg-white rounded shadow-sm text-left">
          <table className="table table-sm table-borderless">
            <thead>
              <tr>
                {/* <th className="text-muted" scope="col"><small>#</small></th> */}
                <th scope="col">Address</th>
                <th scope="col">Network</th>
                <th scope="col">Type</th>
              </tr>
            </thead>
            <tbody>{ips ? ips : ""}</tbody>
          </table>
        </div>
        {/* <div className="card">
                <div className="card-body">
                    This is some text within a card body.
                </div>
            </div> */}
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

export default Device;
