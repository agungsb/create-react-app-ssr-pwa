import React from 'react';
import { Route } from 'react-router-dom';

const CustomPropsRoute = ({ component: Component, initialData, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <Component {...props} initialData={initialData} />
    )} />
  );
}

export default CustomPropsRoute;