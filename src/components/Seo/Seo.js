import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

export default class Seo extends Component {
  static propTypes = {
    description: PropTypes.string,
  }

  static defaultProps = {
    description: 'An example of Create React App SSR PWA'
  }

  render() {
    return (
      <Helmet>
        <title>Create React App SSR PWA</title>
        <meta charset="utf-8" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta http-equiv="refresh" content="900" />
        <meta name="description" content={this.props.description} />
        {this.props.children}
      </Helmet>
    )
  }
}