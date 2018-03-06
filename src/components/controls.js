import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateGreeting } from './actions/controlsActions';

class Controls extends Component {

  constructor(props) {
    super(props); 

    this.state = {
      greeting: 'Hello',
     
    };
  }

  handleChange = ({  target  }) => {
    this.setState({ [target.name]: target.value });
  };
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.updateGreeting({
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

export default connect(
  state => ({ greeting: state.greeting }),
  { updateGreeting }

)(Controls);