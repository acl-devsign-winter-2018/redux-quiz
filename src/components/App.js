import React, { Component } from 'react';
import Controls from './Controls';
import Display from './Display';

export default class App extends Component {

  render() {
    return (
      <section>
        <div>Hello React</div>
        <Controls/>
        <Display/>
      </section>
    );
  }
}

