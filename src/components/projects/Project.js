import React, { Component } from "react";
import PropTypes from "prop-types";

class Project extends Component {
  state = {
    plans: [],
    facilities: []
  };

  componentDidMount() {
    fetch(
      "https://api.packet.net/projects/87d7d210-e5f3-449e-a6e5-babd25af58bf/plans",
      {
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
      }
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({ plans: response.plans });
      });

    fetch(
      "https://api.packet.net/projects/87d7d210-e5f3-449e-a6e5-babd25af58bf/facilities",
      {
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
      }
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({ facilities: response.facilities });
      });
  }

  render() {
    const { name, id } = this.props.project;
    const { plans, facilities } = this.state;

    const plansList = plans.map(plan => (
      <tr key={plan.id} className="border-bottom border-light">
        <td className="font-weight-light">{plan.name}</td>
        <td className="font-weight-light">{plan.slug}</td>
        <td className="font-weight-light">{plan.pricing.hour}</td>
        <td className="font-weight-light">{plan.description}</td>
      </tr>
    ));

    const facilitiesList = facilities.map(facility => (
      <tr key={facility.id} className="border-bottom border-light">
        <td className="font-weight-light">{facility.code}</td>
        <td className="font-weight-light">{facility.name}</td>
        <td className="font-weight-light">{facility.features.join(", ")}</td>
      </tr>
    ));

    return (
      <div className="mx-5 my-4 p-3 bg-white rounded shadow-sm text-left">
        <div className="d-flex justify-content-between align-items-end">
          <span className="h4 px-3 mb-0">Overview</span>
        </div>
        <hr />
        <div className="mx-5 my-3 p-3 bg-white rounded">
          <table className="table table-borderless">
            <tbody>
              <tr className="border-bottom border-light">
                <th scope="row">
                  <small className="text-muted font-weight-bold">NAME</small>
                </th>
                <td className="font-weight-light">{name}</td>
              </tr>
              <tr className="border-bottom border-light">
                <th scope="row">
                  <small className="text-muted font-weight-bold">ID</small>
                </th>
                <td className="font-weight-light">{id}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mx-5 my-3 p-3 bg-white rounded">
          <h6 className="mx-2">Available config options</h6>
          <table className="table table-borderless">
            <thead>
              <tr className="border-bottom border-light">
                <th scope="col">
                  <small className="text-muted font-weight-bold">NAME</small>
                </th>
                <th scope="col">
                  <small className="text-muted font-weight-bold">SLUG</small>
                </th>
                <th scope="col">
                  <small className="text-muted font-weight-bold">PRICING</small>
                </th>
                <th scope="col">
                  <small className="text-muted font-weight-bold">
                    DESCRIPTION
                  </small>
                </th>
              </tr>
            </thead>
            <tbody>{plansList}</tbody>
          </table>
        </div>
        <div className="mx-5 my-3 p-3 bg-white rounded">
          <h6 className="mx-2">Available location options</h6>
          <table className="table table-borderless">
            <thead>
              <tr className="border-bottom border-light">
                <th scope="col">
                  <small className="text-muted font-weight-bold">CODE</small>
                </th>
                <th scope="col">
                  <small className="text-muted font-weight-bold">NAME</small>
                </th>
                <th scope="col">
                  <small className="text-muted font-weight-bold">
                    FEATURES
                  </small>
                </th>
              </tr>
            </thead>
            <tbody>{facilitiesList}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

// PropTypes: validation for properties a component should have
Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;
