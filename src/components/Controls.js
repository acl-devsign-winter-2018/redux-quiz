import React, { Component } from 'react';

export default class ImageForm extends Component {

  state = {
    greeting: '',
    name: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete({
      ...this.state
    })
      .then(() => {
        this.setState({
          greeting: '',
          name: ''
        });
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {

    const { name, greeting } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="image-form">
        <fieldset>
          <legend className="clip">Add an Image</legend>

          <label htmlFor="name"> Name:
          <input name="name" value={name} onChange={this.handleChange} placeholder="name..."/>
          </label>

          <label htmlFor="greeting"> Greeting:
          <input name="greeting" value={greeting} onChange={this.handleChange}/>
          </label>

        </fieldset>
        <button type="submit">Add</button>

      </form>
    );
  }
}