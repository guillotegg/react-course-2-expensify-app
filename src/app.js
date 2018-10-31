import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
//import { setTextFilter, sortByAmount, sortByDate } from './actions/filters';
//import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss'

const store = configureStore();

store.subscribe(() => {
    //const state = store.getState();
    //const visibleState = getVisibleExpenses(state.expenses, state.filters);
    //console.log(visibleState);
});


store.dispatch(addExpense({ description: 'Water bill', 'amount': 100, 'createdAt': 3250 }));
store.dispatch(addExpense({ description: 'Gas bill', 'amount': 150, 'createdAt': 5000 }));
store.dispatch(addExpense({ description: 'Rent', 'amount': 109500, 'createdAt': 1251 }));
//store.dispatch(sortByAmount());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>   
);

ReactDOM.render(jsx, document.getElementById('app'));