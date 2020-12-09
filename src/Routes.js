import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClassDetail from './Pages/ClassDetail/ClassDetail';
import ClassLists from './Pages/ClassLists/ClassLists';
import Creator from './Pages/Creator/Creator';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import ProductLists from './Pages/ProductLists/ProductLists';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import MyPage from './Pages/MyPage/MyPage';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ProductLists} />
          <Route exact path='/ProductDetail' component={ProductDetail} />
          {/* <Route exact path='/ClassDetail/' component={ClassDetail} /> */}
          <Route exact path='/ClassDetail/:id' component={ClassDetail} />
          <Route exact path='/ClassLists/:id' component={ClassLists} />
          <Route exact path='/Creator' component={Creator} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Signup' component={SignUp} />
          <Route exact path='/MyPage' component={MyPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
