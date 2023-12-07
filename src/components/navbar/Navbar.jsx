import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  // Get the current location using the useLocation hook
  const location = useLocation();

  // Define an array of paths where you want to show the navigation bar
  const pathsToShowNavBar = ["/home", "/submit-scantron"];

  // Check if the current path is in the array of pathsToShowNavBar
  const shouldShowNavBar = pathsToShowNavBar.includes(location.pathname);

  return shouldShowNavBar ? (
    <nav className="nav">
      <Link to="/home" className="site-title">
        Home
      </Link>
      <ul>
        <li>
          <NavLink to="/submit-scantron">Submit Scantron</NavLink>
        </li>
        <li>
          <NavLink to="/">Logout</NavLink>
        </li>
      </ul>
    </nav>
  ) : null;
};
