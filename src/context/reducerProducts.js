export default (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    case 'SET_MEALS':
      return {
        ...state,
        meals: action.payload,
      };
    default:
      return state;
  }
};
