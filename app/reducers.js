const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN': {
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token,
        user: action.payload.user,
      };
    }
    case 'SIGN_OUT': {
      return { ...state, id: undefined, token: undefined, user: undefined };
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
