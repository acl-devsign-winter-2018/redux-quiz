import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from './actions';
import Control from './control';
import Form from '../common/Form';

class Categories extends Component {
  
  componentDidMount() {

  }

  render() {
    const { categories, addCategory } = this.props;
    return (
      <div className="two-column">
        <div className="two-left">
          <p className="create-title">Create new:</p>
          <Form onEdit={message => addMessage(message)}/>
        </div>
        <ul className="category-ul">
          {messages.map(messages => <Control key={/>)}
        </ul>
      </div>);
  }
}

export default connect(
  state => ({ categories: state.categories }),
  { addCategory, load }
)(Categories);
