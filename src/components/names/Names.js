import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeName } from './actions';
import Name from './Name';
import NameForm from './NameForm';

class Names extends Component {
  
  render() {
    const { names, changeName } = this.props;
    return (
      <div>
        <NameForm onEdit={changeName}/>
        <ul>
          {names.map(name => <Name key={name.id} {...name}/>)}
        </ul>
      </div>);
  }
}

export default connect(
  state => ({ names: state }),
  { changeName }
)(Names);
