import { addItemToCart, removeItemFromCart } from "./cartUtils";
/**
 * Actions types
 */
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART";
export const IS_ITEM_EXIST_IN_CART = "IS_ITEM_EXIST_IN_CART";

/**
 * Initial State
 */
export const cartInitialState = {
    cartItems: [],
};

/**
 * Cart Reducer
 */

export const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case IS_ITEM_EXIST_IN_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
    
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
    
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
            };
    
        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: [],
            };
    
        default:
            return state;
    }
};

/**
 * Cart Actions
 */

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
});
  
export const removeItem = (item) => ({
    type: REMOVE_ITEM,
    payload: item,
});
  
export const clearItemFromCart = () => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: null,
});
  