import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../hooks/auth.hook";

export const Navbar = () => {
  const auth = useAuth();
  const history = useHistory();

  const logoutHandler = (event) => {
    auth.logout();
    history.push("/");
  };
  return (
    <nav>
      <div>
        <span>Logo</span>
        <li>
          <ul>
            <NavLink to="/create">Create</NavLink>
          </ul>
          <ul>
            <NavLink to="/links">Links</NavLink>
          </ul>
          <ul>
            <a href="/" onClick={logoutHandler}>
              Logout
            </a>
          </ul>
        </li>
      </div>
    </nav>
  );
};
