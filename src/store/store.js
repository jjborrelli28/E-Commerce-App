import { configureStore } from "@reduxjs/toolkit";
import { orderByReducer } from "../reducers/orderByReducer";
import { paginationReducer } from "../reducers/paginationReducer";
import { searchReducer } from "../reducers/searchReducer";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    orderBy: orderByReducer,
    pagination: paginationReducer,
  },
});
