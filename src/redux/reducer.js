import {
    SET_PRODUCTS,
    SET_CATEGORY_PRODUCTS,
    SET_DISPLAY_OVERLAY,
    SET_LOADING,
    SET_ITEM_PROP_OVERLAY,
    SET_CART,
    SET_INFO_TOAST_MESSAGE,
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
        default:
            return state;
    }
}
export default rootReducer;