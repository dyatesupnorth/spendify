import React from "react";
import ReactDOM from "react-dom";
import 'normalize.css/normalize.css'
import 'react-dates/initialize';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRouter, {history} from './routers/AppRouter'
import configureStore from './store/configureStore';

import {
    Provider
} from 'react-redux';
import getVisibleExpenses from './selectors/expenses';
import { startSetExpenses } from './actions/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {login, logout} from './actions/auth'
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage'
// import './playground/promises';  
const store = configureStore();

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log('visibleExpenses: ', visibleExpenses);

console.log('store: ', store.getState());

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

const jsx = ( 
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(<LoadingPage/>, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log('uid: ', user.uid);
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/ '){
                history.push('/dashboard');
            }
        })
    }else{
        store.dispatch(logout());

        renderApp();
        history.push('/');
        console.log('log out');
    }
})