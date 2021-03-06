import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPONSE__ || compose;

export default () => {
    const store = createStore (
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        componseEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};

