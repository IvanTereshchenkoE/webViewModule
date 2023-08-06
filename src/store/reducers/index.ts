import { combineReducers } from 'redux';
import { globalApi } from '../api';
import accountSlice from './accountReducer';
import ordersSlice from './ordersReducer';


const reducers = combineReducers({
  accountSlice: accountSlice.reducer,
  ordersSlice: ordersSlice.reducer,
  [globalApi.reducerPath]: globalApi.reducer,
});

export default reducers;
