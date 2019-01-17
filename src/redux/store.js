import { createStore } from 'redux';
import totalRootReducers from './reducers';
const store = createStore(totalRootReducers);

export default store;