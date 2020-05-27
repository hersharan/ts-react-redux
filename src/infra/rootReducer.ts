import { combineReducers } from 'redux';

import userLogin from './reducers/userLogin.reducer';


const rootReducer = combineReducers({
  userLogin,
});

export default rootReducer;