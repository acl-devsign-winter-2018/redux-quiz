import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from './actions';
import Form from '../common/Form';

class Control extends Component {

  state = {
    editing: false
  };

  render() {
    const { name, greeting } = this.props;

    return (
      <li className="category-li">
        <div>
          <p>{name}</p>
          <p>{greeting}</p>
        </div>
      </li>
    );
  }
}

export default connect(
  null,
  { addMessage }
)(Control);