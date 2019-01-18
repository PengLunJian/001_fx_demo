import {combineReducers} from 'redux';
import HOME_REDUCER from './homeReducer';
import LOGIN_REDUCER from './loginReducer';

/**
 *
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const TOTAL_REDUCERS = combineReducers({
    HOME_REDUCER,
    LOGIN_REDUCER
});

export default TOTAL_REDUCERS;