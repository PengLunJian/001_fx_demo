import store from './store';
import ACTION_TYPES from './actionTypes';

/**
 *
 * @param dispatch
 * @param data
 * @returns {Promise<any>}
 */
export const ajaxRequestSelectAccount = () => {
    return new Promise((resolve, reject) => {
        store.dispatch({
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
        store.dispatch({
            type: ACTION_TYPES.SELECT_PRODUCTS_SUCCESS,
            data
        })
    })
}