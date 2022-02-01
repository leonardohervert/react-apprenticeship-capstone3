import { AddNote, GetNotes } from "../../services/note.service";
import { ADD_NOTE, LOADING } from "../types.config";

export const addNewNote = (title, description, uid) => async (dispatch) => {
  dispatch({ type: LOADING });
  const response = await AddNote({ title, description, uid });
  console.log(response);
  dispatch({ type: ADD_NOTE, payload: { title, description } });
  dispatch({ type: LOADING });
};

export const getNotes = (uid) => async (dispatch) => {
  dispatch({ type: LOADING });
  const response = await GetNotes({ uid });
  console.log(response);
  dispatch({ type: LOADING });
};
