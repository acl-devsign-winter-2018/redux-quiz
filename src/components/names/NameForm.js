import React, { Component } from 'react';

export default class NameForm extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      ...props
    };
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    });

    this.setState({ text: '' });
  };

  render() {
    const { id, text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        
      </form>
    );
  }
}
