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
      state,
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
          <tr key={ip.id} className="border-bottom border-light">
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
        <div className="d-flex justify-content-between align-items-end">
            <span className="h4 px-3 mb-0">{hostname}</span>
            {/* <span className="badge badge-pill badge-success mb-1">{state}</span> */}
            <div>
                <button type="button" class="mx-1 btn btn-sm btn-outline-secondary rounded-pill">LOCK</button>
                <button type="button" class="mx-1 btn btn-sm btn-outline-danger rounded-pill">DELETE</button>

            </div>
        </div>
        <hr />
        <div className="mx-5 my-3 p-3 bg-white rounded">
          <table className="table table-borderless">
            <tbody>
              <tr className="border-bottom border-light">
                <th scope="row">Hostname</th>
                <td>{hostname}</td>
              </tr>
              <tr className="border-bottom border-light">
                <th scope="row">Description</th>
                <td>{description}</td>
              </tr>
              <tr className="border-bottom border-light">
                <th scope="row">ID</th>
                <td>{id}</td>
              </tr>
              <tr className="border-bottom border-light">
                <th scope="row">Switch ID</th>
                <td>{switch_uuid}</td>
              </tr>
              <tr className="border-bottom border-light">
                <th scope="row">Config</th>
                <td>{plan ? plan.name : ""}</td>
              </tr>
              <tr className="border-bottom border-light">
                <th scope="row">Facility</th>
                <td>{facility ? facility.code : ""}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mx-5 my-3 p-3 bg-white rounded">
          <table className="table table-borderless">
            <thead>
              <tr className="border-bottom border-light">
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
