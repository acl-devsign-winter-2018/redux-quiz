import React, { Component } from 'react';


export default class Controls extends Component {

  handleChange = ({  target  }) => {
    this.setState({ [target.name]: target.value });
  };
  
  handleSubmit = event => {
    event.preventDefault();
    // this.props.greetingChange({
      ...this.state
    }); 
  };



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="greeting" value="Hello" onChange={this.handleChange}/>
          <button type="submit">Submit </button>
        </form>
      </div>
    );
  }
}
