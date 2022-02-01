import React from "react";
import { connect } from "react-redux";
import "./Spinner.styles.css";

const Spinner = ({ loading }) => {
  return loading ? (
    <div className="spinner-container">
      <span className="spinner"></span>
    </div>
  ) : null;
};
const mapStateToProps = ({ loading }) => {
  return { loading: loading.loading };
};
export default connect(mapStateToProps, null)(Spinner);
