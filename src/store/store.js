import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "../reducers/searchReducer";

export const store = configureStore({
  reducer: { search: searchReducer },
});
