import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../page/Home';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [{ index: true, Component: Home }],
  },
]);

export default router;
