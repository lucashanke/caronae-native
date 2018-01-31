export const signIn = user => ({
  type: 'SIGN_IN',
  payload: {
    user,
  },
});

export const SIGN_OUT = {
  type: 'SIGN_OUT',
  payload: {},
};

export const startLoading = () => ({
  type: 'START_LOADING',
});

export const stopLoading = () => ({
  type: 'STOP_LOADING',
});
