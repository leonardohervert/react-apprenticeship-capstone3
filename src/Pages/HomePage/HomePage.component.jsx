import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signOutAuth } from "../../redux/actions/auth.actions";
import { getNotes } from "../../redux/actions/note.actions";
import Header from "../../components/Header";
import NoteCard from "../../components/NoteCard";

const HomePage = ({ ...props }) => {
  const { uid, getNotes } = props;
  useEffect(() => {
    getNotes(uid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Header />
      <div className="container max-height">
        <NoteCard />
      </div>
    </div>
  );
};
const mapStateToProps = ({ auth }) => {
  const { uid } = auth;
  return { uid };
};
const mapDispatchToProps = {
  signOutAuth,
  getNotes,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
