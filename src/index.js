import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Miners from './pages/Miners';
import Home from './pages/Home';
import Users from './pages/Users';
import HowToUse from './pages/HowToUse';
import Faq from './pages/Faq';
import Rgpd from './pages/Rgpd';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import './index.css';
import './static/fonts/ArcanaRegular.woff'
import './static/fonts/Roboto.woff'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/miners",
    element: <Miners />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/how-to-use",
    element: <HowToUse />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
  {
    path: "/rgpd",
    element: <Rgpd />,
  },
])

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
