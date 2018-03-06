import React, { Component, Fragment } from 'react';
import Display from './Display';
import Controls from './Controls';
import { connect } from 'react-redux';
import { changeName, changeGreeting } from './reducers';

class App extends Component {

  handleSubmit(object) {
    console.log(object);
    if(object.name) this.changeName(object);
    if(object.greeting) this.changeGreeting(object);
  }

  render() {
    const { changeName, changeGreeting } = this.props;

    this.changeName = changeName;
    this.changeGreeting = changeGreeting;

    return (
      <Fragment>
        <Display/>
        <Controls onComplete={(object) => this.handleSubmit(object)}/>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { changeName, changeGreeting }
)(App);