import React, { createContext, useReducer } from 'react';
import reducerGlobal from './reducerGlobal';

const initState = {
  isOpenProfile: false,
  isOpenFormPhone: true,
  phoneNumber: null,
  isAuth: false,
};

export const GlobalContext = createContext(initState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerGlobal, initState);

  const setIsOpenProfile = (isOpenProfile) => {
    dispatch({
      type: 'SET_IS_OPEN_PROFILE',
      payload: isOpenProfile,
    });
  };

  const toggleAuthForm = ({ isOpenFormPhone, phoneNumber }) => {
    dispatch({
      type: 'TOGGLE_AUTH_FORM',
      payload: { isOpenFormPhone, phoneNumber },
    });
  };

  const setAuth = (isAuth) => {
    dispatch({
      type: 'SET_IS_AUTH',
      payload: isAuth,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        isOpenProfile: state.isOpenProfile,
        setIsOpenProfile,
        isOpenFormPhone: state.isOpenFormPhone,
        phoneNumber: state.phoneNumber,
        toggleAuthForm,
        isAuth: state.isAuth,
        setAuth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
