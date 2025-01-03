import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';

import DonationDetail from './components/DonationDetail/DonationDetail';
import { Helmet } from 'react-helmet';
import Login from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import Assignments from './components/Assignments/Assignments';
import PendingAssignments from './components/PendingAssignments/PendingAssignments';


// Create the router with all the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          <>
            <Helmet>
              <title>Home-Study Hive</title>
              <meta name="description" content="Welcome to our homepage!" />
            </Helmet>
            <Home />
          </>
        ),
      },
      {
        path: "/Assignments",
        element: (
          <>
            <Helmet>
              <title>Assignments-Study Hive</title>
              <meta name="description" content="Learn more about us." />
            </Helmet>
            <Assignments />
          </>
        ), 
      },
      
      {
        path: "/PendingAssignments",
        element: (
          <>
            <Helmet>
              <title>Pending Assignments-Study Hive</title>
              <meta name="description" content="Your personal dashboard." />
            </Helmet>
            <PrivateRoute element={<PendingAssignments/>} />
          </>
        ),
      },
      
      {
        path: '/donationDetail/:campaignId',
        element: (
          <>
            <Helmet>
              <title>Donation Detail - Winter Clothing Donation</title>
              <meta name="description" content="Learn more about this campaign." />
            </Helmet>
            <PrivateRoute element={<DonationDetail/>} />,
          </>
        ),
      },
      {
        path: '/LogIn',
        element: (
          <>
            <Helmet>
              <title>Log In - Winter Clothing Donation</title>
              <meta name="description" content="Learn more about this campaign." />
            </Helmet>
            <Login />
          </>
        ),
      },
      {
        path: '/Register',
        element: (
          <>
            <Helmet>
              <title>Register - Winter Clothing Donation</title>
              <meta name="description" content="Learn more about this campaign." />
            </Helmet>
            <Register />
          </>
        ),
      },
      {
        path: '/ForgotPassword',
        element: (
          <>
            <Helmet>
              <title>Forgot-Password - Winter Clothing Donation</title>
              <meta name="description" content="Learn more about this campaign." />
            </Helmet>
            <ForgotPassword />
          </>
        ),
      },
      {
        path: '/UpdateProfile',
        element: (
          <>
            <Helmet>
              <title>Update Profile - Winter Clothing Donation</title>
              <meta name="description" content="Learn more about this campaign." />
            </Helmet>
            <UpdateProfile />
          </>
        ),
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
