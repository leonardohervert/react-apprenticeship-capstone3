import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, provider } from "../firebase.config";

export const SignInWithGoogle = async () => {
  return await signInWithPopup(auth, provider)
    .then((userCredential) => {
      console.log(userCredential);
      const user = userCredential.user;
      return {
        email: user.email,
        accessToken: user.accessToken,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        uid: user.uid,
      };
    })
    .catch((error) => {
      return {
        error: true,
        code: error.code,
        message: error.message,
      };
    });
};

export const SignInWithEmail = async (user) => {
  const { email, password } = user;

  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      const user = userCredential.user;
      return {
        email: user.email,
        accessToken: user.accessToken,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        uid: user.uid,
      };
    })
    .catch((error) => {
      return {
        code: error.code,
        message: error.message,
      };
    });
};

export const SignUp = async (user) => {
  const { email, password } = user;

  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      const user = userCredential.user;
      return {
        email: user.email,
        accessToken: user.accessToken,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        uid: user.uid,
      };
    })
    .catch((error) => {
      return {
        error: true,
        code: error.code,
        message: error.message,
      };
    });
};

export const SignOut = async () => {
  return await signOut(auth)
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
