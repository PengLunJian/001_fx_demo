import {
    ajaxRequestSelectProducts
} from '../../redux/actions';

/**
 *
 * @param state
 * @returns {{HOME_REDUCER: *, USER_REDUCER: *}}
 */
export const mapStateToProps = (state) => {
    const {
        HOME_REDUCER,
        USER_REDUCER
    } = state;
    return {
        HOME_REDUCER,
        USER_REDUCER
    };
}
/**
 *
 * @param dispatch
 * @returns {{ajaxRequestSelectProducts: function(*=)}}
 */
export const mapDispatchToProps = (dispatch) => {
    return {
        ajaxRequestSelectProducts: () => {
            ajaxRequestSelectProducts(dispatch);
        }
    };
}