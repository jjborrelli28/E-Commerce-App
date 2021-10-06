import { types } from "../types/types";

const initialState = {
  value: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH:
      return { value: action.payload };

    default:
      return state;
  }
};
