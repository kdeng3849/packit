import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/headers/Header";
import DevicesList from "./components/devices/DevicesList";
import Device from "./components/devices/Device";

class App extends Component {
  state = {
    devices: []
  };

  componentDidMount() {
    fetch(
      "https://api.packet.net/projects/87d7d210-e5f3-449e-a6e5-babd25af58bf/devices",
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
        console.log(response.devices);
        this.setState({ devices: response.devices });
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/devices">
              <div className="mx-5 my-3 p-3 bg-white rounded shadow-sm text-left">
                <h4 className="border-bottom border-gray px-3 pb-2 mb-0">
                  Devices
                </h4>
                <DevicesList devices={this.state.devices} />
              </div>
            </Route>
            <Route path="/devices/:id" component={Device} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
