import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
// import HomePage from '../components/HomePage';
import ExpenseList from '../components/ExpenseList';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseList} exact={true} />
        {/* // <Route path="/portfolio" component={PortfolioPage} exact={true} />
        // <Route path="/portfolio/:id" component={PortfolioItemPage} />
        // <Route path="/contact" component={ContactPage} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
