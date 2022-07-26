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
    SET_FILTER_WITH_CATEGORIES,
    SET_FILTER_WITH_PRICE_ASC,
    SET_FILTER_WITH_PRICE_DESC,
    SET_SHIPPING_DATA,
    SET_ORDER,
    SET_FUNCTION_CAPTURE_CHECKOUT,
    SET_ERROR_MESSAGE,
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
export const setFilterWithCategories = payload => ({
    type: SET_FILTER_WITH_CATEGORIES,
    payload: payload
});
export const setFilterWithPriceAsc = payload => ({
    type: SET_FILTER_WITH_PRICE_ASC,
    payload: payload
});
export const setFilterWithPriceDesc = payload => ({
    type: SET_FILTER_WITH_PRICE_DESC,
    payload: payload
});
export const setShippingData = payload => ({
    type: SET_SHIPPING_DATA,
    payload: payload
});
export const setOrder = payload => ({
    type: SET_ORDER,
    payload: payload
});
export const setFunctionCaptureCheckout = payload => ({
    type: SET_FUNCTION_CAPTURE_CHECKOUT,
    payload: payload
});
export const setErrorMessage = payload => ({
    type: SET_ERROR_MESSAGE,
    payload: payload
});
