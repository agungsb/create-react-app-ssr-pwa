import FirstPage from 'containers/FirstPage/FirstPage';
import NotFound from 'containers/NotFound/NotFound';
import SecondPage from 'containers/SecondPage/SecondPage';

const TheRoutes = [
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