import React, { Component } from "react";

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
      state,
      operating_system,
      ip_addresses
    } = this.state.device;

    let ips = [];
    if (ip_addresses) {
      ips = ip_addresses
        .filter(ip => ip.management)
        .map(ip => (
          <tr key={ip.id} className="border-bottom border-light">
            <td className="font-weight-light">{ip.address}</td>
            <td className="font-weight-light">
              {ip.network}/{ip.cidr}
            </td>
            <td className="font-weight-light">{ip.gateway}</td>
            <td className="font-weight-light">
              {ip.public ? "Public" : "Private"} IPv{ip.address_family}
            </td>
          </tr>
        ));
    }

    return (
      <div className="mx-5 my-4 p-3 bg-white rounded shadow-sm text-left">
        <div className="d-flex justify-content-between align-items-end">
          <span className="h4 px-3 mb-0">{hostname}</span>
          <div>
            <button
              type="button"
              className="mx-1 px-5 btn btn-sm btn-outline-secondary rounded-pill"
            >
              LOCK
            </button>
            <button
              type="button"
              className="mx-1 px-5 btn btn-sm btn-outline-danger rounded-pill"
            >
              DELETE
            </button>
          </div>
        </div>
        <hr />
        <div className="mx-5 my-3 p-3 bg-white rounded">
          <table className="table table-borderless">
            <tbody>
              <tr className="border-bottom border-light">
                <th scope="row">
                  <small className="text-muted font-weight-bold">
                    HOSTNAME
                  </small>
                </th>
                <td className="font-weight-light">{hostname}</td>
              </tr>
              <tr className="border-bottom border-light">
                <th scope="row">
                  <small className="text-muted font-weight-bold">
                    DESCRIPTION
                  </small>
                </th>
                <td className="font-weight-light">
                  {description ? description : "-"}
                </td>
              </tr>
              <tr className="border-bottom border-light">
                <th scope="row">
                  <small className="text-muted font-weight-bold">ID</small>
                </th>
                <td className="font-weight-light">{id}</td>
              </tr>
              <tr className="border-bottom border-light">
                <th scope="row">
                  <small className="text-muted font-weight-bold">
                    SWITCH ID
                  </small>
                </th>
                <td className="font-weight-light">{switch_uuid}</td>
              </tr>
              <tr className="border-bottom border-light">
                <th scope="row">
                  <small className="text-muted font-weight-bold">CONFIG</small>
                </th>
                <td className="font-weight-light">{plan ? plan.name : ""}</td>
              </tr>
              <tr className="border-bottom border-light">
                <th scope="row">
                  <small className="text-muted font-weight-bold">
                    FACILITY
                  </small>
                </th>
                <td className="font-weight-light">
                  {facility ? facility.code.toUpperCase() : ""}
                </td>
              </tr>
              <tr className="border-bottom border-light">
                <th scope="row">
                  <small className="text-muted font-weight-bold">OS</small>
                </th>
                <td className="font-weight-light">
                  {operating_system ? operating_system.name : ""}
                </td>
              </tr>
              <tr className="border-bottom border-light">
                <th scope="row">
                  <small className="text-muted font-weight-bold">STATE</small>
                </th>
                <td className="font-weight-light">{state}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mx-5 my-3 p-3 bg-white rounded">
          <table className="table table-borderless">
            <thead>
              <tr className="border-bottom border-light">
                <th scope="col">
                  <small className="text-muted font-weight-bold">ADDRESS</small>
                </th>
                <th scope="col">
                  <small className="text-muted font-weight-bold">NETWORK</small>
                </th>
                <th scope="col">
                  <small className="text-muted font-weight-bold">GATEWAY</small>
                </th>
                <th scope="col">
                  <small className="text-muted font-weight-bold">TYPE</small>
                </th>
              </tr>
            </thead>
            <tbody>{ips ? ips : ""}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Device;
