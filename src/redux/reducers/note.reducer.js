import * as types from "../types.config";

const initialState = {
  notes: [],
  newNoteAdded: false,
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.ADD_NOTE: {
      return {
        newNoteAdded: true,
        notes: state.notes.concat({ ...payload }),
      };
    }
    default:
      return state;
  }
};

export default reducer;
