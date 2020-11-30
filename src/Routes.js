import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClassDetail from "./pages/ClassDetail/ClassDetail";
import ClassLists from "./pages/ClassLists/ClassLists";
import Creator from "./pages/Creator/Creator";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductLists from "./pages/ProductLists/ProductLists";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import MyPage from "./pages/MyPage/MyPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ProductLists} />
          <Route exact path="/ProductDetail" component={ProductDetail} />
          <Route exact path="/ClassDetail" component={ClassDetail} />
          <Route exact path="/ClassLists" component={ClassLists} />
          <Route exact path="/Creator" component={Creator} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={SignUp} />
          <Route exact path="/MyPage" component={MyPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
