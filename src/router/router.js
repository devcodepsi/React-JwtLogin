import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

// layout
const BeforeLoginRouter = React.lazy(() => import('./BeforeLoginRouter'));
const AfterLoginRouter = React.lazy(() => import('./AfterLoginRouter'));

// both before after login
const NotFound = React.lazy(() => import('./../pages/NotFound'));

// before login
const Login = React.lazy(() => import('../pages/Login'));
const Regist = React.lazy(() => import('../pages/Regist'));

// after login
const DashboardHome = React.lazy(() => import('../pages/DashboardHome'));
const DashboardSecond = React.lazy(() => import('../pages/DashboardSecond'));
const DashboardThird = React.lazy(() => import('../pages/DashboardThird'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* ######################## before login ######################## */}
      <Route element={<BeforeLoginRouter />}>
        <Route index element={<Login />} />
        <Route path="regist" element={<Regist />} />
      </Route>
      {/* ######################## after login ######################## */}
      <Route element={<AfterLoginRouter />}>
        <Route path="dashboard" element={<DashboardHome />} />
        <Route path="second" element={<DashboardSecond />} />
        <Route path="third" element={<DashboardThird />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
