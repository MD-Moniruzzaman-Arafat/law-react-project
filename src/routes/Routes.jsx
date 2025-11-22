import { createBrowserRouter } from 'react-router';
import App from '../App';
import Bookings from '../page/Bookings';
import Details from '../page/Details';
import Home from '../page/Home';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: 'details', Component: Details },
      { path: 'my-bookings', Component: Bookings },
    ],
  },
]);

export default router;
