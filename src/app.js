import React from "react";
import ReactDOM from "react-dom";
import 'normalize.css/normalize.css'
import 'react-dates/initialize';

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';

import {
    Provider
} from 'react-redux';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
// import './playground/promises';  
const store = configureStore();

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log('visibleExpenses: ', visibleExpenses);

console.log('store: ', store.getState());


const jsx = ( 
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));