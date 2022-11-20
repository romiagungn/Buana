import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <hr />
      <div className="links">
        <NavLink to="/Home" className="link" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/" className="link" activeClassName="active">
          Login
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
