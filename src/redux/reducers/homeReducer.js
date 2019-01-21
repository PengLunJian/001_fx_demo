import ACTION_TYPES from "../actionTypes";
import * as states from "../states";

/**
 *
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */
const HOME_REDUCER = (state = states.initIndex, action) => {
    switch (action.type) {
        case ACTION_TYPES.SELECT_PRODUCTS_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case ACTION_TYPES.SELECT_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: true,
                isSuccess: true,
                data: action => action.data
            });
        case ACTION_TYPES.SELECT_PRODUCTS_FAILURE:
            return Object.assign({}, state, {
                isLoading: true,
                isSuccess: false
            });
        default:
            return state;
    }
};

export default HOME_REDUCER;