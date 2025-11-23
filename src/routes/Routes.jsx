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
      {
        path: 'details/:id',
        Component: Details,
        loader: async ({ params }) => {
          const res = await fetch('/data.json');
          const data = await res.json();
          return data.find((lawyer) => lawyer.id === Number(params.id));
        },
      },
      { path: 'my-bookings', Component: Bookings },
      {
        path: '*',
        element: (
          <div className="text-center h-screen flex justify-center font-extrabold text-7xl items-center">
            404 Not Found
          </div>
        ),
      },
    ],
  },
]);

export default router;
