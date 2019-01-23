import {
    ajaxRequestSelectAccount
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
 * @returns {{ajaxRequestSelectProducts: ajaxRequestSelectProducts}}
 */
export const mapDispatchToProps = () => {
    return {
        ajaxRequestSelectAccount
    };
}