import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

const store = configureStore();

const now = moment();

store.dispatch(addExpense({ description: 'Water bill', note: '', amount: 200, createdAt: now.add(1,'day').valueOf() }));
store.dispatch(addExpense({ description: 'Rent', note: '', amount: 700, createdAt: now.add(2, 'day').valueOf() }));
store.dispatch(addExpense({ description: 'Gas bill', note: '', amount: 10000, createdAt: now.add(3, 'day').valueOf() }));


const state = store.getState();
console.log(state);
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));