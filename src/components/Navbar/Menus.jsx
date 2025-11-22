import { Link, NavLink } from 'react-router';

export default function Menus() {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'active border-b rounded-b-none'
              : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-bookings"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'active border-b rounded-b-none'
              : ''
          }
        >
          My-Bookings
        </NavLink>
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
