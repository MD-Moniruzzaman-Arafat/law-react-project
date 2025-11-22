import { Link } from 'react-router';

export default function Menus() {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/my-bookings">My-Bookings</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact Us</Link>
      </li>
    </>
  );
}
