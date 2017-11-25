import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  state = {
    text: ''
  }
  handleChange = event => {
    this.setState({ text: event.target.value })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <small>{this.state.text}</small>
        <Link to="/">Back</Link>
      </div>
    )
  }
}