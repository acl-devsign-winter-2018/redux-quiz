import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {

  handleGreetingChange = ({ target }) => {
    this.props.changeGreeting(target.value);
  };

  handleNameChange = ({ target }) => {
    this.props.changeName(target.value);
  };

  render() {
    const { name, greeting } = this.props; 
    return (
      <div>
        <header>{greeting}</header>
        <section>{name}</section>
      </div>
    );
  }
}

export default connect(
  state => ({
    greeting: state.greeting,
    name: state.name
  }),
  null
)(Display);