import {
  AboutPage,
  FirstPage,
  NotFound,
  ProfilePage,
  SecondPage
} from 'containers';

import AsyncAboutPage from './../routes/AsyncAboutPage';

export const SecondPageRoutes = [
  {
    path: '/second',
    exact: true,
    component: ProfilePage,
  },
  {
    path: '/second/about',
    component: AsyncAboutPage
  }
]

export const MainRoutes = [
  {
    path: '/',
    exact: true,
    component: FirstPage
  },
  {
    path: '/second',
    component: SecondPage
  },
  {
    component: NotFound
  }
];