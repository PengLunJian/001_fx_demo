import actionTypes from "../actionTypes";
import * as states from "../states";

/**
 *
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */
const LOGIN_REDUCER = (state = states.initLogin, action) => {
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

export default LOGIN_REDUCER;