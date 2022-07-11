import {
    SET_PRODUCTS,
    SET_CATEGORY_PRODUCTS,
    SET_DISPLAY_OVERLAY,
    SET_LOADING,
    SET_ITEM_PROP_OVERLAY,
    SET_CART,
    SET_INFO_TOAST_MESSAGE,
    SET_VALUE_SEARCH,
    SET_POST_TYPE,
    SET_RESULTS_SEARCH,
}from './constants'

export const setProducts = payload => ({
    type: SET_PRODUCTS,
    payload: payload
});
export const setCategoryProducts = payload => ({
    type: SET_CATEGORY_PRODUCTS,
    payload: payload
});
export const setDisplayOverlay = payload => ({
    type: SET_DISPLAY_OVERLAY,
    payload: payload
});
export const setItemPropOverlay = payload => ({
    type: SET_ITEM_PROP_OVERLAY,
    payload: payload
});
export const setLoading = payload => ({
    type: SET_LOADING,
    payload: payload
});
export const setCart = payload => ({
    type: SET_CART,
    payload: payload
});
export const setInfoToastMess = payload => ({
    type: SET_INFO_TOAST_MESSAGE,
    payload: payload
});
export const setValueSearch = payload => ({
    type: SET_VALUE_SEARCH,
    payload: payload
});
export const setPostType = payload => ({
    type: SET_POST_TYPE,
    payload: payload
});
export const setResulesSearch = payload => ({
    type: SET_RESULTS_SEARCH,
    payload: payload
});

