import { combineReducers } from 'redux';
import formA from './FormA';
import formB from './FormB';
import formC from './FormC';
import receipt from './Receipt';

export default combineReducers({
  formA,
  formB,
  formC,
  receipt
});
