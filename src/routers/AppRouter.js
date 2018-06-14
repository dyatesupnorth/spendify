import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';



const HelpPage = () => (
    <p>This is the help page</p>
)

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="active" exact={true}>Go home</NavLink>
        <NavLink to="/create" activeClassName="active">Create an Expense</NavLink>
        <NavLink to="/edit/:id" activeClassName="active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="active">Help Page</NavLink>
    </header>
)


const AppRouter = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
        <Header></Header>
        <Switch>
            <Route path="/" component={ExpenseDashboard} exact={true}/>
            <Route path="/create" component={AddExpense} />
            <Route path="/edit/:id" component={EditExpense} />
            <Route path="/help" component={Help} />
            <Route component={NotFound} />

        </Switch>
        </div>
    </BrowserRouter>
)
export default AppRouter;