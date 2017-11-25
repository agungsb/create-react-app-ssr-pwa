import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <h2>Home. <Link to="/login">Link to Login</Link></h2>
    );
  }
}

export default Home;
