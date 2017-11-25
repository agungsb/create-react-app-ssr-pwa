/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

import './global-styles/index.css';
// import '!style-loader!css-loader!./global-styles/index.css';

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import ApiClient from './utils/ApiClient'
import configureStore from './redux-modules/create'

// Let the reducers handle initial state
const initialState = window.DATA;
const client = new ApiClient();
const store = configureStore(client, initialState);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App initialData={window.DATA} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
