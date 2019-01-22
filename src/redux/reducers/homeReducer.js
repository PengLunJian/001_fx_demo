import * as ACTION_TYPES from "../actionTypes";
import * as states from "../states";

/**
 *
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */
const HOME_REDUCER = (state = states.HOME_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPES.SELECT_PRODUCTS_REQUEST:
            return {
                ...state,
                products: Object.assign({}, state.products, {
                    isLoading: true
                })
            };
        case ACTION_TYPES.SELECT_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: Object.assign({}, state.products, {
                    isLoading: false,
                    isSuccess: true,
                    data: action.data
                })
            };
        case ACTION_TYPES.SELECT_PRODUCTS_FAILURE:
            return {
                ...state,
                products: Object.assign({}, state.products, {
                    isLoading: true,
                    isSuccess: false
                })
            };
        default:
            return state;
    }
};

export default HOME_REDUCER;