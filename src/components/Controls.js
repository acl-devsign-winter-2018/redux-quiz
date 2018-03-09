import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeGreeting, changeName } from './actions';

class Controls extends Component {

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
        <label>
          Greeting: 
          <input value={greeting} onChange={this.handleGreetingChange}/>
        </label>
        <label>
          Name: 
          <input value={name} onChange={this.handleNameChange}/>
        </label>
      </div>
    );
  }
}

export default connect(
  state => ({
    greeting: state.greeting,
    name: state.name
  }),
  { changeGreeting, changeName }
)(Controls);