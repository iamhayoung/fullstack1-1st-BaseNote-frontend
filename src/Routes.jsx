import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Category from './pages/category/Category';
import Main from './pages/main/Main';
import { Login, Signup } from './pages/member';
import { Cart } from './pages/order';
import Product from './pages/product/Product';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/category/:volume" component={Category} />
          <Route exact path="/member/login" component={Login} />
          <Route exact path="/member/signup" component={Signup} />
          <Route exact path="/order/cart" component={Cart} />
          <Route exact path="/product/:volume/:id" component={Product} />
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
