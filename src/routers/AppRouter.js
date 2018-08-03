import React from "react";
import ReactDOM from "react-dom";
import { Router , Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import ExpenseDashboard from '../components/ExpenseDashboard';
import LoginPage from '../components/LoginPage'
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRoute'
import PublicRoute from "./PublicRoute";
export const history = createHistory();

const AppRouter = () => (
    <Router history={history} basename={process.env.PUBLIC_URL}>
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard" component={ExpenseDashboard}/>
            <PrivateRoute path="/create" component={AddExpense} />
            <PrivateRoute path="/edit/:id" component={EditExpense} />
            <Route path="/help" component={Help} />
            <Route component={NotFound} />

        </Switch>
        </div>
    </Router>
)
export default AppRouter;