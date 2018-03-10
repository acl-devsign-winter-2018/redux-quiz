import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {

  render() {
    const { name, greeting } = this.props;
    
    return (
      <div className="greeting">
        <p>| {name.name} |</p>
        <p>| {greeting.greeting} |</p>
      </div>
    );
  }
}


export default connect(
  state => ({ name: state.name, greeting: state.greeting }),
  null
)(Display);

