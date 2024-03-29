import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Miners from './pages/Miners';
import Home from './pages/Home';
import Users from './pages/Users';
import Events from './pages/Events';
import Faq from './pages/Faq';
import Rgpd from './pages/Rgpd';
import Calculator from './pages/Calculator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './static/fonts/ArcanaRegular.woff'
import './static/fonts/Roboto.woff'
import './static/fonts/visitor-webfont.woff'
import Merges from './pages/Merges';
import Simulator from './pages/Simulator';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/miners",
    element: <Miners />,
    children: [],
  },
  {
    path: "/users",
    element: <Users />,
    children: [],
  },
  {
    path: "/events",
    element: <Events />,
    children: [],
  },
  {
    path: "/merges",
    element: <Merges />,
    children: [],
  },
  {
    path: "/calculator",
    element: <Calculator />,
    children: [],
  },
  {
    path: "/simulator",
    element: <Simulator />,
    children: [],
  },
  {
    path: "/faq",
    element: <Faq />,
    children: [],
  },
  {
    path: "/rqpd",
    element: <Rgpd />,
    children: [],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
