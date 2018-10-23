import { combineReducers } from 'redux';
import online from './online';
import offline from './offline';

const rootReducer = combineReducers({
  online,
  offline
});
export default rootReducer;
