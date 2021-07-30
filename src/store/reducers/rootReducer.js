import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  project: postReducer
});

export default rootReducer;