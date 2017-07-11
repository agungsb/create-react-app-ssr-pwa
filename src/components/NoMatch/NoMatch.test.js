import React from 'react'
import ReactDOM from 'react-dom'
import NoMatch from 'components/NoMatch/NoMatch';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NoMatch />, div)
})

