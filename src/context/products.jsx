import React, { createContext, useReducer } from 'react';
import reducer from './reducerProducts';

const initState = {
  spells: [],
  categories: {},
  meals: [],
};

export const ProductsContext = createContext(initState);
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const setCategories = (categories) => {
    dispatch({
      type: 'SET_CATEGORIES',
      payload: categories,
    });
  };

  const setMeals = (meals) => {
    dispatch({
      type: 'SET_MEALS',
      payload: meals,
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        meals: state.meals,
        setMeals,
        categories: state.categories,
        setCategories,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
