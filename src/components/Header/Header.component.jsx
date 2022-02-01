import React from "react";
import { connect } from "react-redux";
import { signOutAuth } from "../../redux/actions/auth.actions";
import { Link } from "react-router-dom";
import Image from "../Image";
const Header = ({ ...props }) => {
  const { signOutAuth, auth } = props;
  const { email, photoURL } = auth;
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
            <div className="d-flex align-items-center mx-2">
              <span>{email}</span>
            </div>
            {photoURL && (
              <Image
                src={photoURL}
                width={40}
                height={40}
                className="img-fluid rounded"
                alt="user"
              />
            )}
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
  return { auth };
};
const mapDispatchToProps = {
  signOutAuth,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
