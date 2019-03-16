import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import DeviceItem from './DeviceItem'

class DevicesList extends Component {
  render() {
    // return this.props.todos.map((todo) => (
    //    <TodoItem key={todo.id} todo={todo} markComplete={ this.props.markComplete } delTodo={this.props.delTodo}/>
    // ));
    return this.props.devices.map((device) => (
            <DeviceItem device={device} />
        ))
  }
}

// PropTypes: validation for properties a component should have
// Todos.propTypes = {
//   todos: PropTypes.array.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired
// }

export default DevicesList;
