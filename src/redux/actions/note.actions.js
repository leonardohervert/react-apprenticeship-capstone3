import { AddNote, GetNotes } from "../../services/note.service";
import { ADD_NOTE } from "../types.config";

export const addNewNote = (title, description, uid) => async (dispatch) => {
  const response = await AddNote({ title, description, uid });
  console.log(response);
  dispatch({ type: ADD_NOTE, payload: { title, description } });
};

export const getNotes = (uid) => async (dispatch) => {
  const response = await GetNotes({ uid });
  console.log(response);
};
