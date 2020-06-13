import React from "react";
import { message } from "antd";
import MessagePage from "./components/messagePage/MessagePage";
import ManagePage from "./components/managePage/ManagePage";
import NavigationBar from "./components/NavigationBar";
import { HashRouter, Route } from "react-router-dom";

message.config({
  top: 42,
});

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <NavigationBar />
        <Route exact path="/" component={ManagePage} />
        <Route path="/newMessage" component={MessagePage} />
      </div>
    </HashRouter>
  );
}

export default App;
