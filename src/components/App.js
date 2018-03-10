import React, { Component } from 'react';
import Greeting from './greeting/Greeting';
import Name from './name/Name';


export default class App extends Component {

  render() {
    return (
      <div>
        <div>Hello Greeting</div>
        <Greeting/>
        <Name/>
      </div>
    );
  }
}