import React, { Component } from 'react';

export default class Greeting extends Component {

    state = {
      greeting: 'Hello'
    };

    render() {
      const { greeting } = this.state;

      return (
        <h3>{greeting}</h3>
      );
    }
}