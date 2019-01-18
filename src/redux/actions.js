import ACTION_TYPES from './actionTypes';
/**
 *
 * @param dispatch
 * @param data
 * @returns {Promise<any>}
 */
export const ajaxRequestSelectAccount = (dispatch, data) => {
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
export const ajaxRequestSelectProducts = (dispatch, data) => {
    // return new Promise((resolve, reject) => {
    //     dispatch({
    //         type: ACTION_TYPES.SELECT_ACCOUNT_REQUEST
    //     })
    // })
    console.log(1);
}