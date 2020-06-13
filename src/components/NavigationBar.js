import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav``;

const NavList = styled.ul`
  list-style-type: none;
  background-color: #096dd9;
  display: flex;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  display: flex;
`;

const Link = styled(NavLink)`
  padding: 8px 16px;
  text-align: center;
  color: white;
  &:hover {
  }
  &.active {
    color: #096dd9;
    cursor: default;
    background-color: white;
  }
`;

function NavigationBar() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link exact to="/">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/newMessage">New Message</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default NavigationBar;
