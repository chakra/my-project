import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PayeeReducer from "./PayeeReducer";
import AccountReducer from "./AccountReducer";
import AddressReducer from "./AddressReducer";
import TransactionReducer from "./TransactionReducer";


export default combineReducers({
  auth: AuthReducer,
  payee: PayeeReducer,
  account: AccountReducer,
  address: AddressReducer,
  transaction: TransactionReducer
});
