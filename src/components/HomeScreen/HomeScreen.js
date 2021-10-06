import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Container from "react-bootstrap/Container";
import { InputSearch } from "./InputSearch";
import { GridProducts } from "./GridProducts";
import { useSelector } from "react-redux";
import { CategoryBar } from "./CategoryBar";
export const HomeScreen = () => {
  const { value } = useSelector((state) => state.search);

  const url = `/api/catalog_system/pub/products/search/?ft=${value}&_from=0&_to=49`;

  const { data, loading, error } = useFetch(url);

  console.log(data);

  return (
    <Container>
      <div className="input-search-container">
        <InputSearch />
      </div>
      <CategoryBar />
      <GridProducts data={data} />
    </Container>
  );
};
