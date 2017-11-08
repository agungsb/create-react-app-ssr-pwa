import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { CustomPropsRoute } from 'components';
import { MainRoutes } from 'utils/TheRoutes';

export default class App extends Component {
  render() {
    return (
      <Switch>
        {MainRoutes.map((route, key) => {
          return (
            <CustomPropsRoute {...route} key={key} initialData={this.props.initialData} />
          )
        })}
      </Switch>
    )
  }
}
