import React from 'react';
import { Route } from 'react-router-dom';
// import Loadable from 'utils/LoadableComponent';

const CustomPropsRoute = ({ component: Component, initialData, ...rest }) => {
  // const LoadableComponent = Loadable({
  //   loader: () => new Promise(resolve => {
  //     resolve(Component);
  //   })
  // })
  return (
    <Route {...rest} render={props => (
      <Component {...props} initialData={initialData} />
    )} />
  );
}

export default CustomPropsRoute;