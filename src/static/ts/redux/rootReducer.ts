import {combineReducers} from 'redux';

import authReducer from './auth';
import errorReducer from './error';
import themeReducer from './themes';

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  theme: themeReducer,
});

export default rootReducer;
