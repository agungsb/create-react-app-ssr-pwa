import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from 'utils/routes';

const PropsRoute = ({ component: Component, initialData, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} initialData={initialData} />
  )} />
)

export default class App extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route, key) => {
          return (
            <PropsRoute {...route} key={key} initialData={this.props.initialData} />
          )
        })}
      </Switch>
    )
  }
}
