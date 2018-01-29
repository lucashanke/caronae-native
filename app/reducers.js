const reducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN": {
      return { ...state, signedIn: true };
    }
    case "SIGN_OUT": {
      return { ...state, signedIn: true };
    }
    default:
      return state;
  }
};

export default reducer;