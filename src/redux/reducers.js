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
        case actionTypes.SELECT_ACCOUNT_SUCCESS:
            return Object.assign({}, state, {
                isLoading: true,
                isSuccess: true,
                data: action => action.data
            });
        case actionTypes.SELECT_ACCOUNT_FAILURE:
            return Object.assign({}, state, {
                isLoading: true,
                isFailure: false
            });
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
        case actionTypes.SELECT_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: true,
                isSuccess: true,
                data: action => action.data
            });
        case actionTypes.SELECT_PRODUCTS_FAILURE:
            return Object.assign({}, state, {
                isLoading: true,
                isSuccess: false
            });
        default:
            return state;
    }
};

const totalRootReducers = combineReducers({
    handlerLoginReducer,
    handlerIndexReducer
});

export default totalRootReducers;