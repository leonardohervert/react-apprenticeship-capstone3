import * as types from "../types.config";

const initialState = {
  accessToken: "",
  email: "",
  photoURL: "",
  phoneNumber: "",
  uid: "",
  authenticated: false,
  error: false,
  code: "",
  message: "",
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.SIGN_IN: {
      return { ...state, ...payload, authenticated: true };
    }
    case types.SIGN_OUT: {
      return { ...state, ...initialState };
    }
    case types.AUTH_ERROR: {
      return {
        ...state,
        ...payload,
        authenticated: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
