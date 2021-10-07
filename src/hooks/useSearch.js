import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { types } from "../types/types";

export const useSearch = () => {
  const { valueSearch } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const [value, setValue] = useState(valueSearch);

  const history = useHistory();

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleInputSearch = (e) => {
    e.preventDefault();

    const actionSearch = {
      type: types.SEARCH,
      payload: value.toLocaleLowerCase(),
    };
    dispatch(actionSearch);

    const actionPagination = {
      type: types.PAGINATION,
      payload: 1,
    };
    dispatch(actionPagination);

    if (history.location.pathname !== "/") {
      const action = {
        type: types.MAS_RELEVANTE,
        payload: "Más relevante",
      };
      dispatch(action);

      history.push("/");
    }
  };

  const reset = () => {
    setValue("");
  };

  return { value, handleInputChange, handleInputSearch, reset };
};
