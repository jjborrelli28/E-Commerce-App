import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Container from "react-bootstrap/Container";
import { InputSearch } from "../Shared/InputSearch";
import { GridProducts } from "../Shared/GridProducts";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { orders } from "../../helpers/orders";

export const HomeScreen = () => {
  const { valueSearch } = useSelector((state) => state.search);
  const { valueOrderBy, nameOrderBy } = useSelector((state) => state.orderBy);

  const url = `/api/catalog_system/pub/products/search/?ft=${valueSearch}&${valueOrderBy}&_from=0&_to=49`;

  const { data, resources } = useFetch(url);

  const dispatch = useDispatch();

  const handleOrderBySelect = (e) => {
    const action = {
      type: e.target.textContent,
      payload: e.target.textContent,
    };

    dispatch(action);
  };

  console.log(data);
  console.log(resources);

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
        <GridProducts products={data} n={5} />
      ) : (
        <div className="spinner-container">
          <Spinner animation="grow" variant="primary" />
        </div>
      )}
    </Container>
  );
};
