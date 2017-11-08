import {
  AboutPage,
  FirstPage,
  NotFound,
  ProfilePage,
  SecondPage
} from 'containers';

export const SecondPageRoutes = [
  {
    path: '/second',
    exact: true,
    component: ProfilePage,
  },
  {
    path: '/second/about',
    component: AboutPage
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