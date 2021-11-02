import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Container from "react-bootstrap/Container";
import { InputSearch } from "../Shared/InputSearch";
import { GridProducts } from "../Shared/GridProducts";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import { orders } from "../../helpers/orders";

import Alert from "react-bootstrap/Alert";
import { PaginationBasic } from "./PaginationBasic";
import { types } from "../../types/types";

export const HomeScreen = () => {
  const { valueSearch } = useSelector((state) => state.search);
  const { valueOrderBy, nameOrderBy } = useSelector((state) => state.orderBy);
  const { page } = useSelector((state) => state.pagination);

  const url = `/api/catalog_system/pub/products/search/?ft=${valueSearch}&${valueOrderBy}&_from=${
    parseInt(page) * 20 - 20
  }&_to=${parseInt(page) * 20 - 1}`;

  const { data, resources } = useFetch(url);

  const dispatch = useDispatch();

  const handleOrderBySelect = (e) => {
    const actionOrder = {
      type: e.target.textContent,
      payload: e.target.textContent,
    };

    dispatch(actionOrder);

    const actionPagination = {
      type: types.PAGINATION,
      payload: 1,
    };

    dispatch(actionPagination);
  };

  const allPages =
    resources && Math.ceil(parseInt(resources.split("/")[1]) / 20);

  const pages = allPages > 125 ? 125 : allPages;

  return (
    <Container>
      <header className="mt-4 mb-4">
        <h1 className="mb-4">E-Commerce App</h1>
        <hr />
        <InputSearch />
      </header>
      <Row>
        <DropdownButton
          align="end"
          title={`Ordenar por: ${nameOrderBy}`}
          id="dropdown-menu-align-end"
          className="mb-3 d-flex justify-content-end"
        >
          {orders.map((order) => (
            <Dropdown.Item
              key={order}
              onClick={handleOrderBySelect}
              active={order === nameOrderBy && true}
            >
              {order}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Row>
      {data ? (
        data.length !== 0 ? (
          <>
            <GridProducts products={data} n={5} />
            <PaginationBasic pages={pages} />
          </>
        ) : (
          <Alert variant="danger" style={{ fontWeight: "bold" }}>
            No se encontraron resultados para su busqueda
          </Alert>
        )
      ) : (
        <div className="spinner-container">
          <Spinner animation="grow" variant="primary" />
        </div>
      )}
    </Container>
  );
};
