export default (state, action) => {
  switch (action.type) {
    case 'SET_IS_OPEN_PROFILE':
      return {
        ...state,
        isOpenProfile: action.payload,
      };
    case 'TOGGLE_AUTH_FORM':
      const { isOpenFormPhone, phoneNumber } = action.payload;
      return {
        ...state,
        isOpenFormPhone,
        phoneNumber,
      };
    case 'SET_IS_AUTH':
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};
