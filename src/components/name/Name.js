import React, { Component } from 'react';

export default class Name extends Component {

    state = {
      name: 'Testina'
    };

    render() {
      const { name } = this.state;

      return (
        <h3>{name}</h3>
      );
    }
}