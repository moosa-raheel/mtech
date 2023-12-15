import { NavLink } from "react-router-dom";

export default function Navbar({ nav }) {
  return (
    <>
      <nav className={nav}>
        <div className="container nav-container">
          <NavLink to="/" className="logo">
            MTECH
          </NavLink>
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return { color: isActive ? "#fff" : "" };
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <NavLink
                to="/login"
                style={({ isActive }) => {
                  return { color: isActive ? "#fff" : "" };
                }}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                style={({ isActive }) => {
                  return { color: isActive ? "#fff" : "" };
                }}
              >
                Signup
              </NavLink>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => {
                  return { color: isActive ? "#fff" : "" };
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
Navbar.defaultProps = {
  nav: "navbar",
};
