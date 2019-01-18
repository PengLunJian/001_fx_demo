import {createStore} from 'redux';
import TOTAL_REDUCERS from './reducers/index';

const store = createStore(TOTAL_REDUCERS);

export default store;