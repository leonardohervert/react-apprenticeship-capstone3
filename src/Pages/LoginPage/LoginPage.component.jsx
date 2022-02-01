import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import SignIn from "../../components/SignIn";
import { signInEmail } from "../../redux/actions/auth.actions";
import "./Login.styles.css";

function LoginPage({ ...props }) {
  const { signInEmail, authenticated } = props;
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if (authenticated === true) history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated]);

  const signInWithEmail = (e) => {
    e.preventDefault();
    signInEmail(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <div className="content">
      <section className="login">
        <h1>Google Keep Copy App!</h1>
        <form onSubmit={signInWithEmail} className="login-form">
          <div className="form-group">
            <label htmlFor="Email">
              <strong>Email</strong>
              <input required ref={emailRef} type="text" id="email" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>Password</strong>
              <input required ref={passwordRef} type="password" id="password" />
            </label>
          </div>
          <button className="btn btn-primary w-100" type="submit">
            login
          </button>
        </form>
        <SignIn className="btn btn-light w-100 my-3" />
        <div className="d-flex justify-content-center">
          Need an account?
          <Link to="/signup">Sign Up!</Link>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = ({ auth }) => {
  const { authenticated } = auth;
  return { authenticated };
};
const mapDispatchToProps = { signInEmail };
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
