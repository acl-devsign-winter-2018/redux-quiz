import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeGreeting, changeName } from './actions';

class Controls extends Component {
  render() {
    const { changeGreeting, changeName } = this.props; 
    return (
      <div>
        <input placeholder="greeting"/>
        <button onClick={changeGreeting}>Updated Greeting</button>
        <input placeholder="name"/>
        <button onClick={changeName}>Updated Name</button>
      </div>
    );
  }
}

export default connect(
  state => ({ tag: state.tag }),
  { changeGreeting, changeName }
)(Controls);