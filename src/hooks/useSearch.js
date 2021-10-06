import { useState } from "react";
import { useDispatch } from "react-redux";
import { types } from "../types/types";

export const useSearch = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleInputSearch = (e) => {
    e.preventDefault();

    const action = {
      type: types.SEARCH,
      payload: value.toLocaleLowerCase(),
    };
    dispatch(action);
  };

  const reset = () => {
    setValue("");
  };

  return { value, handleInputChange, handleInputSearch, reset };
};
