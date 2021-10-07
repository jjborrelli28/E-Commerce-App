import { types } from "../types/types";

const initialState = {
  valueSearch: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH:
      return { valueSearch: action.payload };

    default:
      return state;
  }
};
