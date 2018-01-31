const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN': {
      return { ...state, signedIn: true };
    }
    case 'SIGN_OUT': {
      return { ...state, signedIn: true };
    }
    case 'START_LOADING': {
      return { ...state, loading: true };
    }
    case 'STOP_LOADING': {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
};

export default reducer;
