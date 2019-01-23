import apis from '../apis';
import axios from '../axios';
import * as ACTION_TYPES from './actionTypes';

/**
 *
 * @param dispatch
 * @param data
 * @returns {Promise<any>}
 */
export const ajaxRequestSelectAccount = (dispatch) => {
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
export const ajaxRequestSelectProducts = (dispatch) => {
    dispatch({
        type: ACTION_TYPES.SELECT_PRODUCTS_REQUEST
    });
    return new Promise((resolve, reject) => {
        axios(apis.selectProducts, {pageCode: 2})
            .then((res) => {
                res = res || {};
                const {data, success} = res || {};
                if (success) {
                    dispatch({
                        type: ACTION_TYPES.SELECT_PRODUCTS_SUCCESS,
                        data
                    });
                } else {
                    dispatch({
                        type: ACTION_TYPES.SELECT_PRODUCTS_FAILURE
                    });
                }
                resolve(res);
            })
            .catch((err) => {
                dispatch({
                    type: ACTION_TYPES.SELECT_PRODUCTS_FAILURE
                });
                reject(err);
            });
    })
}