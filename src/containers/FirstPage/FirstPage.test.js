import React from 'react'
import ReactDOM from 'react-dom'
import FirstPage from './FirstPage';

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import ApiClient from './../../utils/ApiClient'
import configureStore from './../../redux-modules/create'

// Let the reducers handle initial state
const initialState = {};
const client = new ApiClient();
const store = configureStore(client, initialState);

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <FirstPage />
    </BrowserRouter>
  </Provider>, div)
})

