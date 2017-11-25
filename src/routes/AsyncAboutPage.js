

// @flow
import React, { Component } from 'react';
import { Chunk } from 'components';

const loadAboutPageContainer = () => require('./../containers/AboutPage/AboutPage' /* webpackChunkName: "about_page" */);

class AsyncAboutPage extends Component {
  render() {
    return <Chunk load={loadAboutPageContainer} />;
  }
}

export default AsyncAboutPage;
