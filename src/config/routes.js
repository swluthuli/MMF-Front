import React from 'react';
import Loadable from 'react-loadable';

import Home from '../containers/Home';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('../containers/views/Dashboard'),
  loading: Loading,
});

const paddingbooking = Loadable({
  loader: () => import('../containers/views/paddingbooking'),
  loading: Loading,
});

const Book = Loadable({
  loader: () => import('../containers/views/Book'),
  loading: Loading,
});
const users = Loadable({
  loader: () => import('../containers/views/Users'),
  loading: Loading,
});
const register = Loadable({
  loader: () => import('../containers/views/Register'),
  loading: Loading,
});
const cars = Loadable({
  loader: () => import('../containers/views/Cars'),
  loading: Loading,
});
const addcars = Loadable({
  loader: () => import('../containers/views/AddCars'),
  loading: Loading,
});
const edit = Loadable({
  loader: () => import('../containers/forms/Edit'),
  loading: Loading,
});
const useredit = Loadable({
  loader: () => import('../containers/tables/Useredit'),
  loading: Loading,
});
const caredit = Loadable({
  loader: () => import('../containers/tables/Caredit'),
  loading: Loading,
});
const routes = [
  { path: '/', name: '', component: Home, exact: true },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/paddingbooking', name: 'paddingbooking', component: paddingbooking },
  { path: '/Book', name: 'Book', component: Book },
  { path: '/users', name: 'Users', component: users },
  { path: '/register', name: 'register', component: register },
  { path: '/cars', name: 'cars', component: cars },
  { path: '/addcars', name: 'addcars', component: addcars },
  { path: '/edit/:id', name: 'edit', component: edit },
  { path: '/useredit/:id', name: 'useredit', component: useredit },
  { path: '/caredit/:id', name: 'caredit', component: caredit }
];

export default routes;
