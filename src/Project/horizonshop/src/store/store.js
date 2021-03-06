import React, { createContext, useContext, useReducer } from 'react';
import { messageReducer, messageInitialState } from './message';
import { cartReducer, cartInitialState } from './cart';
/**
 * React context for store
 */
const StoreContext = createContext();

/**
 * Combine initial states
 */
const store = {
  message: messageInitialState,
  cart: cartInitialState,
};

/**
 * Combined reducers
 */
const reducers = (store, action) => ({
  message: messageReducer(store.message, action),
  cart: cartReducer(store.cart, action),
});

/**
 * Store context provider
 */
export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={useReducer(reducers, store)}>{children}</StoreContext.Provider>
);

/**
 * React hook for consuming store
 */
export const useStore = () => useContext(StoreContext);
