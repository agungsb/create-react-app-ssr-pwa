import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
// import AsyncComponent from './../../components/AsyncComponent/AsyncComponent';
import CustomPropsRoute from './../../components/CustomPropsRoute/CustomPropsRoute';
// import { MainRoutes } from 'utils/TheRoutes';

// import {
// Home,
// Login,
// NotFound
// } from 'containers';

import Loadable from 'react-loadable';

const MyLoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};

// const Home = AsyncComponent(() => import("./../Home/Home"));
// const Login = AsyncComponent(() => import("./../Login/Login"));
// const NotFound = AsyncComponent(() => import("./../NotFound/NotFound"));

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "homeChunk" */'./../FirstPage/FirstPage'),
  loading: MyLoadingComponent
});

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "loginChunk" */'./../Login/Login'),
  loading: MyLoadingComponent
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "notFoundChunk" */'./../NotFound/NotFound'),
  loading: MyLoadingComponent
});

const MainRoutes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    component: NotFound,
  }
]
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
    // return (
    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/login" exact component={Login} />
    //     <Route component={NotFound} />
    //   </Switch>
    // );
  }
}
