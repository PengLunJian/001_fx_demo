import store from './store';
import * as ACTION_TYPES from './actionTypes';

const {dispatch} = store;

/**
 *
 * @param dispatch
 * @param data
 * @returns {Promise<any>}
 */
export const ajaxRequestSelectAccount = () => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: ACTION_TYPES.SELECT_ACCOUNT_REQUEST
        })
    })
}
/**
 *
 * @param dispatch
 * @param data
 * @returns {Promise<any>}
 */
export const ajaxRequestSelectProducts = (data) => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: ACTION_TYPES.SELECT_PRODUCTS_REQUEST
        })
        setTimeout(() => {
            dispatch({
                type: ACTION_TYPES.SELECT_PRODUCTS_SUCCESS,
                data
            })
        }, 5000);
    })
}