import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Container from "react-bootstrap/Container";
import { InputSearch } from "../Shared/InputSearch";
import { GridProducts } from "../Shared/GridProducts";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { orders } from "../../helpers/orders";
import Pagination from "react-bootstrap/Pagination";
import Alert from "react-bootstrap/Alert";

export const HomeScreen = () => {
  const { valueSearch } = useSelector((state) => state.search);
  const { valueOrderBy, nameOrderBy } = useSelector((state) => state.orderBy);

  const [page, setPage] = useState(1);

  const url = `/api/catalog_system/pub/products/search/?ft=${valueSearch}&${valueOrderBy}&_from=${
    page * 20 - 20
  }&_to=${page * 20 - 1}`;

  const { data, resources } = useFetch(url);

  const dispatch = useDispatch();

  const handleOrderBySelect = (e) => {
    const action = {
      type: e.target.textContent,
      payload: e.target.textContent,
    };

    dispatch(action);
  };

  // Paginación básica
  const allPages =
    resources && Math.ceil(parseInt(resources.split("/")[1]) / 20);

  const pages = allPages > 125 ? 125 : allPages;

  let active = 2;
  let items = [];

  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const handlePrevius = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const handleNext = (e) => {
    if (page !== pages) {
      setPage(page + 1);
    }
  };

  const handleFirst = () => {
    setPage(1);
  };

  const handleLast = () => {
    if (page !== pages) {
      setPage(pages);
    }
  };

  const handlePageSelect = (e) => {
    if (page !== parseInt(e.target.textContent)) {
      setPage(e.target.textContent);
    }
  };

  return (
    <Container>
      <InputSearch />
      <hr />

      <DropdownButton
        title={`Ordenar por: ${nameOrderBy}`}
        id="dropdown-menu"
        className="mb-3"
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

      {data ? (
        data.length !== 0 ? (
          <>
            <GridProducts products={data} n={5} />
            <Pagination className="d-flex justify-content-center">
              <Pagination.First
                disabled={page === 1 && true}
                onClick={handleFirst}
              />
              <Pagination.Prev
                disabled={page === 1 && true}
                onClick={handlePrevius}
              />
              <Pagination.Item
                active={page === 1 && true}
                onClick={handlePageSelect}
              >
                {page === 1 ? page : 1}
              </Pagination.Item>
              <Pagination.Ellipsis disabled={page === 1 && true} />

              <Pagination.Item
                active={page !== 1 && page !== pages && true}
                onClick={handlePageSelect}
              >
                {page === 1 ? page + 1 : page === pages ? pages - 1 : page}
              </Pagination.Item>

              <Pagination.Ellipsis disabled={page === pages && true} />
              <Pagination.Item
                active={page === pages && true}
                onClick={handlePageSelect}
              >
                {page === pages ? page : pages}
              </Pagination.Item>
              <Pagination.Next
                disabled={page === pages && true}
                onClick={handleNext}
              />
              <Pagination.Last
                disabled={page === pages && true}
                onClick={handleLast}
              />
            </Pagination>
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
