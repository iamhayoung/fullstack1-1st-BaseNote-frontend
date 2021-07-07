import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Category from './pages/Category/Category';
import Main from './pages/Main/Main';
import Member from './pages/Member/Member';
import Order from './pages/Order/Order';
import Product from './pages/Product/Product';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/member" component={Member} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/product" component={Product} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
