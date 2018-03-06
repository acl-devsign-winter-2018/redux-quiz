import React, { Component } from 'react';


export default class Controls extends Component {



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
