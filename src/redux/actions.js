import {
    SET_PRODUCTS,
    SET_CATEGORY_PRODUCTS,
    SET_DISPLAY_OVERLAY,
    SET_LOADING,
    SET_ITEM_PROP_OVERLAY,
    SET_CART,
    SET_INFO_TOAST_MESSAGE,
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
