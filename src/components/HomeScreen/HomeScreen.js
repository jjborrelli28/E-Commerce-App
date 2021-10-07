import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Container from "react-bootstrap/Container";
import { InputSearch } from "../Shared/InputSearch";
import { GridProducts } from "./GridProducts";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

export const HomeScreen = () => {
  const { valueSearch } = useSelector((state) => state.search);

  const url = `/api/catalog_system/pub/products/search/?ft=${valueSearch}&_from=0&_to=49`;

  const { data, resources } = useFetch(url);

  console.log(data);
  console.log(resources);

  return (
    <Container>
      <InputSearch />
      <hr />
      {data ? (
        <GridProducts products={data} />
      ) : (
        <div className="spinner-container">
          <Spinner animation="grow" variant="primary" />
        </div>
      )}
    </Container>
  );
};
