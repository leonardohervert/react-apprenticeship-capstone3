import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// eslint-disable-next-line react/prop-types
function Private({ children, ...rest }) {
  const { authenticated } = rest;

  return (
    <Route
      {...rest}
      render={() =>
        authenticated ? (
          children
        ) : (
          <React.Fragment>
            <Redirect to="/login" />
          </React.Fragment>
        )
      }
    />
  );
}

const mapStateToProps = ({ auth }) => {
  const { authenticated, token, isValid, userName } = auth;
  return { authenticated, token, isValid, userName };
};

export default connect(mapStateToProps, null)(Private);
