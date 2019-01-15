import {combineReducers} from 'redux';
import * as states from './states';
import actionTypes from './actionTypes';

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
const handlerLoginReducer = (state = states.initLogin, action) => {
    switch (action.type) {
        case actionTypes.SELECT_ACCOUNT_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
            break;
        case actionTypes.SELECT_ACCOUNT_SUCCESS:
            return Object.assign({}, state, {
                isLoading: true,
                isSuccess: true,
                data: action => action.data
            });
            break;
        case actionTypes.SELECT_ACCOUNT_FAILURE:
            return Object.assign({}, state, {
                isLoading: true,
                isFailure: false
            });
            break;
        default:
            return state;
    }
};
/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
const handlerIndexReducer = (state = states.initIndex, action) => {
    switch (action.type) {
        case actionTypes.SELECT_PRODUCTS_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
            break;
        case actionTypes.SELECT_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: true,
                isSuccess: true,
                data: action => action.data
            });
            break;
        case actionTypes.SELECT_PRODUCTS_FAILURE:
            return Object.assign({}, state, {
                isLoading: true,
                isSuccess: false
            });
            break;
        default:
            return state;
    }
};

const totalRootReducers = combineReducers({
    handlerLoginReducer,
    handlerIndexReducer
});

export default totalRootReducers;