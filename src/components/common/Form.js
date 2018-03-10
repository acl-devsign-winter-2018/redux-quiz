import React, { Component } from 'react';
import '../controls/control.js'

export default class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      greeting: '',
      ...props
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    });
    this.setState({ name: '', greeting: '' });
    console.log(this.state);
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value, [target.greeting]: target.greeting });
  };

  render() {
    const { greeting, name } = this.state;
    return (
      <div>
        <form onSubmit = {this.handleSubmit} className="add-message">
          <label htmlFor="name">
            <input required id="name" name="name" value={name} onChange={this.handleChange} placeholder="ex: Text"/>
            <input required id="greeting" greeting="greeting" value={greeting} onChange={this.handleChange} placeholder="ex: Text"/>
          </label>
          <button type="submit">+</button>
        </form>
      </div>
    );
  }
}