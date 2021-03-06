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
} from './constants';
const initialState = {
    products: [],
    cart : {},
    categoryProducts : [],
    displayOverlay : false,
    itemPropOverlay : <></>,
    loading : true,
    infoToastMess : {
        openToastMess : false,
        toastMessage  : '',
        message   : '',
    },
    search_parameters : {
        value_search : '',
        post_type : '',
        results_search : '',
    },
    filter_options : {
        filter_with_categories : '',
        filter_with_price_asc : false,
        filter_with_price_desc : false,
    },
    shippingData : {},
    order : {},
    functionCaptureCheckout : '',
    errorMessage : '',
}

const rootReducer = (state = initialState , action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products : action.payload
            };
        case SET_CART:
            return {
                ...state,
                cart : action.payload
            };
        case SET_CATEGORY_PRODUCTS:
            return {
                ...state,
                categoryProducts : action.payload
            }
        case SET_DISPLAY_OVERLAY:
            return {
                ...state,
                displayOverlay : action.payload
            }
        case SET_ITEM_PROP_OVERLAY:
            return {
                ...state,
                itemPropOverlay : action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading : action.payload
            } 
        case SET_INFO_TOAST_MESSAGE :
            return {
                ...state,
                infoToastMess : action.payload
            }
        case SET_VALUE_SEARCH :
            return {
                ...state,
                search_parameters : {
                    ...state.search_parameters , 
                    value_search : action.payload
                }
            }  
        case SET_RESULTS_SEARCH :
            return {
                ...state,
                search_parameters : {
                    ...state.search_parameters , 
                    results_search : action.payload
                }
            } 
        case SET_POST_TYPE :
            return {
                ...state,
                search_parameters : {
                    ...state.search_parameters , 
                    post_type : action.payload
                }
            }
        case SET_FILTER_WITH_CATEGORIES :
            return {
                ...state,
                filter_options : {
                    ...state.filter_options , 
                    filter_with_categories : action.payload
                }
            }
        case SET_FILTER_WITH_PRICE_ASC :
            return {
                ...state,
                filter_options : {
                    ...state.filter_options , 
                    filter_with_price_asc : action.payload
                }
            }
        case SET_FILTER_WITH_PRICE_DESC :
            return {
                ...state,
                filter_options : {
                    ...state.filter_options , 
                    filter_with_price_desc : action.payload
                }
            }
        case SET_SHIPPING_DATA :
            return {
                ...state,
                shippingData : action.payload
            }
        case SET_ORDER :
            return {
                ...state,
                order : action.payload
            }
        case SET_FUNCTION_CAPTURE_CHECKOUT :
            return {
                ...state,
                functionCaptureCheckout : action.payload
            }
        case SET_ERROR_MESSAGE :
            return {
                ...state,
                errorMessage : action.payload
            }
        default:
            return state;
    }
}
export default rootReducer;