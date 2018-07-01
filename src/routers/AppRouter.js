import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import React from 'react';
import CreatePage from '../components/CreatePage';
import EditPage from '../components/EditPage';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';

const Header = () => (
    <header>
        <NavLink exact={true} activeClassName="is-active" to="/">Home</NavLink>
        <NavLink activeClassName="is-active" to="/create">Create</NavLink>
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </header>
);


const AppRouter = () => (
<BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/create" component={CreatePage} />
            <Route path="/edit/:id" component={EditPage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
</BrowserRouter>
);


export default AppRouter;