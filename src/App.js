import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/headers/Header";
import DevicesList from "./components/devices/DevicesList";
import Device from "./components/devices/Device";
import Project from "./components/projects/Project";

class App extends Component {
  state = {
    project: {},
    devices: []
  };

  componentDidMount() {
    
    fetch("https://api.packet.net/projects?include=devices", {
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
        const project = response.projects[0];
        console.log(project);
        console.log(project.devices); ////////
        this.setState({ project, devices: project.devices });
      });
  }

  render() {
    const { name } = this.state.project;
    return (
      <Router>
        <div className="App">
          <Header projectName={name} />
          <Switch>
            <Route exact path="/">
              <Project project={this.state.project} />
            </Route>
            <Route exact path="/devices">
              <DevicesList devices={this.state.devices} />
            </Route>
            <Route path="/devices/:id" component={Device} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
