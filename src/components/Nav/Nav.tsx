import React from 'react';
import { Navigation, NavLink, NavWrapper } from './Nav.style';

const Nav = () => {
  return (
    <NavWrapper>
      <Navigation>
        <NavLink to="/">Clicker</NavLink>
        <NavLink to="/Upgrades">Workers</NavLink>
        <NavLink to="/Upgrades">Upgrades</NavLink>
      </Navigation>
    </NavWrapper>
  );
};

export default Nav;
