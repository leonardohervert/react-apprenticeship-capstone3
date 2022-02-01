import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { connect } from "react-redux";
const SignIn = ({ ...props }) => {
  const SignInWithFirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <div>
        <button {...props} onClick={() => SignInWithFirebase()}>
          Google Login
        </button>
      </div>
    </React.Fragment>
  );
};
const mapDispatchToProps = {};
export default connect(null, mapDispatchToProps)(SignIn);
