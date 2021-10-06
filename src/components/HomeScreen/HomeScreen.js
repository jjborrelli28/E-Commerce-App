import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Container from "react-bootstrap/Container";
import { InputSearch } from "./InputSearch";
import { GridProducts } from "./GridProducts";
import { useSelector } from "react-redux";
import { CategoryBar } from "./CategoryBar";
import Spinner from "react-bootstrap/Spinner";

export const HomeScreen = () => {
  const { value } = useSelector((state) => state.search);

  const url = `/api/catalog_system/pub/products/search/?ft=${value}&_from=0&_to=49`;

  const { data } = useFetch(url);

  console.log(data);

  return (
    <Container>
      <InputSearch />
      <CategoryBar />
      {data ? (
        <GridProducts data={data} />
      ) : (
        <div className="spinner-container">
          <Spinner animation="grow" variant="primary" />
        </div>
      )}
    </Container>
  );
};
