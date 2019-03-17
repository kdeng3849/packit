import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Device extends Component {
  state = {
      device: {}
  }

  componentDidMount () {
    const { id } = this.props.match.params

    fetch(`https://api.packet.net/devices/${id}`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "X-Auth-Token": "hD7cM283nx3sNmdYWDKfBpPWwcYyFUYw",
          "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
    })
    .then(response => {
        return response.json()
      })
    .then(response => {
        // console.log(response)
        this.setState({ device: response })
    });
  }

  render() {
    const { hostname } = this.state.device
    console.log(hostname)
    
    return (
        <div className="media text-muted pt-3">
            { hostname }
        </div>
    )
  }
}


// PropTypes: validation for properties a component should have
// Todos.propTypes = {
//   todos: PropTypes.array.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired
// }

export default Device;
