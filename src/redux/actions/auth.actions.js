import {
  SignInWithEmail,
  SignUp,
  SignInWithGoogle,
  SignOut,
} from "../../services/auth.service";
import * as types from "../types.config";

export const authError = (error) => {
  return {
    type: types.AUTH_ERROR,
    payload: { ...error },
  };
};

export const signInWithGoogle = (email) => async (dispatch) => {
  dispatch({ type: types.LOADING });
  const response = await SignInWithGoogle({ email });
  if (!response.error)
    dispatch({ type: types.SIGN_IN, payload: { ...response } });
  dispatch({ type: types.LOADING });
};

export const signUpEmail = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOADING });
  const response = await SignUp({ email, password });
  if (!response.error)
    dispatch({ type: types.SIGN_IN, payload: { ...response } });
  else dispatch(authError(response));

  dispatch({ type: types.LOADING });
};

export const signInEmail = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOADING });
  const response = await SignInWithEmail({ email, password });
  if (!response.error)
    dispatch({ type: types.SIGN_IN, payload: { ...response } });
  else dispatch(authError(response));
  dispatch({ type: types.LOADING });
};

export const signOutAuth = () => async (dispatch) => {
  dispatch({ type: types.LOADING });
  const response = await SignOut();
  console.log(response);
  if (response === true) dispatch({ type: types.SIGN_OUT });

  dispatch({ type: types.LOADING });
};
