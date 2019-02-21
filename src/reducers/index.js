import { combineReducers } from 'redux';
import formA from './FormA';
import FormB from './FormB';

export default combineReducers({
  formA: formA,
  FormB,
});
