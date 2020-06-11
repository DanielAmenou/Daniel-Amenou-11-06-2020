import React from "react";
import { message } from "antd";
import styled from "styled-components";
import MessagePage from "./components/messagePage/MessagePage";
import ManagePage from "./components/managePage/ManagePage";
import { HashRouter, Route, NavLink } from "react-router-dom";

message.config({
  top: 42,
});

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
    filter: opacity(0.9);
  }
  &.active {
    color: #096dd9;
    background-color: white;
  }
`;

function App() {
  return (
    <HashRouter basename="/">
      <div>
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
        <Route exact path="/" component={ManagePage} />
        <Route path="/newMessage" component={MessagePage} />
      </div>
    </HashRouter>
  );
}

export default App;
