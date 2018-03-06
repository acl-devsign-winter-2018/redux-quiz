import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Display extends Component{
  render(){
    const { greeting, name } = this.props;
    return(
      <div>
          {greeting} {name}
      </div>
    )
  }

}

connect(
  state => ({ greeting: greeting, name: name }),
  null,
)(Display)
