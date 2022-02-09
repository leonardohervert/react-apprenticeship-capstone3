import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyBxHwTL5uyCUFkIb7Xw7zmM4Ff3NvEj1FI",
  authDomain: "keep-in.firebaseapp.com",
  projectId: "keep-in",
  storageBucket: "keep-in.appspot.com",
  messagingSenderId: "125150820655",
  appId: "1:125150820655:web:e688d3bfdfd870c8fa49da",
});

export default app;

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

provider.setCustomParameters({ promps: "select_account" });
