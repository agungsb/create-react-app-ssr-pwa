import {
  FirstPage,
  NoMatch,
  SecondPage,
} from 'containers';

const routes = [
  {
    path: '/',
    exact: true,
    component: FirstPage
  },
  {
    path: '/second',
    component: SecondPage,
  },
  {
    component: NoMatch
  }
];

export default routes;