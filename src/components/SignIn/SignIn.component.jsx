import React from "react";

const SignIn = ({ ...props }) => {
  return (
    <React.Fragment>
      <button {...props}>Google Login</button>
    </React.Fragment>
  );
};
export default SignIn;
