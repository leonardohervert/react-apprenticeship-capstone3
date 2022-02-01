import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { signUpEmail } from "../../redux/actions/auth.actions";

function SignUpPage({ ...props }) {
  const { authenticated, signUpEmail } = props;
  const history = useHistory();

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  useEffect(() => {
    if (authenticated === true) history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated]);

  const signUpWithEmail = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value)
      return setError("The password don't match.");

    signUpEmail(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <div className="content">
      <section className="login">
        <h1>Sign Up!</h1>
        <form onSubmit={signUpWithEmail} className="login-form">
          <div className="form-group">
            <label htmlFor="username">
              <strong>username </strong>
              <input required ref={emailRef} type="text" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>password </strong>
              <input required ref={passwordRef} type="password" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>password </strong>
              <input required ref={confirmPasswordRef} type="password" />
            </label>
          </div>
          <button className="login-button" type="submit">
            Sign Up
          </button>
          {/* <SignIn className="login-button" /> */}
        </form>
      </section>
    </div>
  );
}

const mapStateToProps = ({ auth }) => {
  const { authenticated } = auth;
  return { authenticated };
};

const mapDispatchToProps = { signUpEmail };
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
