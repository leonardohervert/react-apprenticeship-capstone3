import * as types from "../types.config";

const INITIAL_STATE = {
  loading: false,
  showModal: false,
  showModalDeposit: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};

export default reducer;
