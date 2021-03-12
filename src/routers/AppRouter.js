import React from 'react';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import { Router, Route, Switch } from 'react-router-dom';
import ExpenseLoginPage from '../components/ExpenseLoginPage';
import PrivateRoute from './PrivateRoute';
import PubliceRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PubliceRoute path="/" component={ExpenseLoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);


export default AppRouter;