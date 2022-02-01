import React from "react";
import { connect } from "react-redux";
import { signInWithGoogle } from "../../redux/actions/auth.actions";
const SignIn = ({ ...props }) => {
  const { signInWithGoogle } = props;
  function handleOnClick() {
    signInWithGoogle();
  }

  return (
    <button {...props} onClick={() => handleOnClick()}>
      Google Login
    </button>
  );
};
const mapDispatchToProps = { signInWithGoogle };
export default connect(null, mapDispatchToProps)(SignIn);
