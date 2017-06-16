import {
  FirstPage,
  NotFound,
  SecondPage,
} from 'containers';

var TheRoutes = [
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
    component: NotFound
  }
];

export default TheRoutes;