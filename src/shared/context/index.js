import React, { createContext, useReducer } from 'react';

import { itemOrders } from '../data'; // just to fake a initial data to show in the Head cart

const reducer = (state, pair) => ({ ...state, ...pair });

export const EcommerceContext = createContext();

const initialState = {
  layout: {
    showMegaMenu: '',
  },
  cart: {
    itemOrders,
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
