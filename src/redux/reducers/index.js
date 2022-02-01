import { combineReducers } from "redux";
import loading from "./loading.reducer";
import auth from "./auth.reducer";
import note from "./note.reducer";

export default combineReducers({ loading, auth, note });
