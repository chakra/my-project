import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import AuthReducer from './AuthReducer'
import PayeeReducer from "./PayeeReducer"
import AccountReducer from "./AccountReducer"
import AddressReducer from "./AddressReducer"
import TransactionReducer from "./TransactionReducer"


const AppReducers = combineReducers({
    authReducer: AuthReducer,
    payeeReducer: PayeeReducer,
    accountReducer: AccountReducer,
    addressReducer: AddressReducer,
    transactionReducer: TransactionReducer
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
}

const logger = createLogger();

let store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
