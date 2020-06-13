import React from "react";
import { message } from "antd";
import MessagePage from "./components/messagePage/MessagePage";
import ManagePage from "./components/managePage/ManagePage";
import NavigationBar from "./components/NavigationBar";
import { HashRouter, Route, Switch } from "react-router-dom";

message.config({
  top: 42,
});

function App() {
  return (
    <HashRouter basename="/">
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <ManagePage />
        </Route>
        <Route path="/newMessage">
          <MessagePage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
