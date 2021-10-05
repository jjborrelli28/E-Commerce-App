import React from "react";
import { useFetch } from "../../hooks/useFetch";

export const HomeScreen = () => {
  const url = `https://fravega.myvtex.com/api/catalog_system/pub/products/search/notebook`;

  const { data, loading, error } = useFetch(url);

  console.log(data);
  return (
    <div>
      <h1>HomeScreen</h1>
    </div>
  );
};
