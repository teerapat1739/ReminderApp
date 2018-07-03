import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpense from './selectors/expenses';
const store = configureStore();

//const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));
// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
store.dispatch(addExpense({ description: 'Water bill'}));
store.dispatch(addExpense({ description: 'Gas bill' }));
store.dispatch(setTextFilter('bill'));

console.log(store.getState());
const state = store.getState();
const visbleExpenses = getVisibleExpense(state.expenses, state.filters)
console.log(visbleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById('app'));
