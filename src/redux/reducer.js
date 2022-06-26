import {
    SET_PRODUCTS,
    SET_CATEGORY_PRODUCTS,
    SET_DISPLAY_OVERLAY,
    SET_LOADING,
    SET_ITEM_PROP_OVERLAY
} from './constants';
const initialState = {
    products: [],
    categoryProducts : [],
    displayOverlay : false,
    itemPropOverlay : <></>,
    loading : true,
}

const rootReducer = (state = initialState , action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products : action.payload
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
        default:
            return state;
    }
}
export default rootReducer;