import React from 'react'
import ReactDOM from 'react-dom'
import { FirstPage } from 'containers';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FirstPage />, div)
})

