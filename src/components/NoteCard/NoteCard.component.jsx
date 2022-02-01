import React, { useRef } from "react";
import { connect } from "react-redux";
import { addNewNote } from "../../redux/actions/note.actions";
import "./NoteCard.css";
const NoteCard = ({ ...props }) => {
  const { uid, addNewNote } = props;
  const inputRef = useRef();
  const areaRef = useRef();
  const submitNote = (e) => {
    e.preventDefault();

    addNewNote(inputRef.current.value, areaRef.current.value, uid);
  };

  return (
    <div className="d-flex flex-column note-card mx-auto">
      <form className="form">
        <input ref={inputRef} />
        <textarea ref={areaRef} />
        <button className="btn-primary" onClick={submitNote}>
          +
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = ({ auth }) => {
  const { uid } = auth;
  return { uid };
};

const mapDispatchToProps = { addNewNote };
export default connect(mapStateToProps, mapDispatchToProps)(NoteCard);
