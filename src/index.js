import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import ApiClient from './utils/ApiClient'
import configureStore from './redux/create'

// Let the reducers handle initial state
const initialState = {};
const client = new ApiClient();
const store = configureStore(client, initialState)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App initialData={window.DATA} />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
