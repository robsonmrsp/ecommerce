import React, { createContext, useReducer } from 'react';

const reducer = (state, pair) => ({ ...state, ...pair });

export const EcommerceContext = createContext();

const initialState = {
  layout: {
    showMegaMenu: '',
  },
  cart: {
    itemOrders: [],
  },
  user: {},
  categories: [],
  theme: {},
};

export const EcommerceProvider = ({ children }) => {
  const [state, update] = useReducer(reducer, initialState);
  return (
    <>
      <EcommerceContext.Provider value={{ state, update }}>{children}</EcommerceContext.Provider>
    </>
  );
};
