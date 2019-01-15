import ACTION_TYPES from './actionTypes';

export const SELECT_ACCOUNT_REQUEST = {
    type: ACTION_TYPES.SELECT_ACCOUNT_REQUEST,
    text: '用户登录查询 REQUEST'
};

export const SELECT_ACCOUNT_SUCCESS = {
    type: ACTION_TYPES.SELECT_ACCOUNT_SUCCESS,
    text: '用户登录查询 SUCCESS'
};

export const SELECT_ACCOUNT_FAILURE = {
    type: ACTION_TYPES.SELECT_ACCOUNT_FAILURE,
    text: '用户登录查询 FAILURE'
};

export const SELECT_PRODUCTS_REQUEST = {
    type: ACTION_TYPES.SELECT_PRODUCTS_REQUEST,
    text: '查询首页推荐商品 REQUEST'
};

export const SELECT_PRODUCTS_SUCCESS = {
    type: ACTION_TYPES.SELECT_PRODUCTS_SUCCESS,
    text: '查询首页推荐商品 SUCCESS'
};

export const SELECT_PRODUCTS_FAILURE = {
    type: ACTION_TYPES.SELECT_PRODUCTS_FAILURE,
    text: '查询首页推荐商品 FAILURE'
};