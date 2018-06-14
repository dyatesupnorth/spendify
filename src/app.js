import React from "react";
import ReactDOM from "react-dom";
import 'normalize.css/normalize.css'
import 'react-dates/initialize';

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import {Provider } from 'react-redux';
 import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
store.dispatch(addExpense({description: 'Water Bill', amount: 4000}));
store.dispatch(addExpense({description: 'Gas Bill'}));
store.dispatch(addExpense({description: 'Rent', amount: 10905}));

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
//   }, 3000);
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log('visibleExpenses: ', visibleExpenses);

console.log('store: ', store.getState());


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));
