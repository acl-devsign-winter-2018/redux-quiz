import React, { Component } from 'react';
import Controls from './Controls';
import Display from './Displays';

export default class App extends Component {

  render() {
    return (
      <div>
        <Controls/>
        <Display/>
      </div>
    );
  }
}