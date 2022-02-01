import React from "react";
import { connect } from "react-redux";
import { signOutAuth } from "../../redux/actions/auth.actions";
import { Link } from "react-router-dom";
const Header = ({ ...props }) => {
  const { signOutAuth, email } = props;
  const handleLogOut = () => {
    signOutAuth();
  };
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light d-flex">
        <div className="d-flex justify-content-between w-100">
          <Link className="btn" to="/">
            Home
          </Link>
          <div className="d-flex justify-content-end">
            <div className="d-flex align-items-center">
              <span>{email}</span>
            </div>
            <button className="btn" onClick={handleLogOut}>
              Log Out
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

const mapStateToProps = ({ auth }) => {
  const { email } = auth;
  return { email };
};
const mapDispatchToProps = {
  signOutAuth,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
