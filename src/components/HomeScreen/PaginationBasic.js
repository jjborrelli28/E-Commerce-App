import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-bootstrap/Pagination";
import { types } from "../../types/types";

export const PaginationBasic = ({ pages }) => {
  const { page } = useSelector((state) => state.pagination);

  const dispatch = useDispatch();

  let active = 2;
  let items = [];

  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const handlePrevious = () => {
    if (page !== 1) {
      const action = {
        type: types.PAGINATION,
        payload: parseInt(page) - 1,
      };

      dispatch(action);
    }
  };

  const handleNext = () => {
    if (page !== pages) {
      const action = {
        type: types.PAGINATION,
        payload: parseInt(page) + 1,
      };

      dispatch(action);
    }
  };

  const handleFirst = () => {
    const action = {
      type: types.PAGINATION,
      payload: 1,
    };

    dispatch(action);
  };

  const handleLast = () => {
    if (page !== pages) {
      const action = {
        type: types.PAGINATION,
        payload: pages,
      };

      dispatch(action);
    }
  };

  const handlePageSelect = (e) => {
    if (page !== parseInt(e.target.textContent)) {
      const action = {
        type: types.PAGINATION,
        payload: parseInt(e.target.textContent),
      };

      dispatch(action);
    }
  };

  return (
    <Pagination className="d-flex justify-content-center">
      <Pagination.First disabled={page === 1} onClick={handleFirst} />
      <Pagination.Prev disabled={page === 1} onClick={handlePrevious} />
      <Pagination.Item active={page === 1} onClick={handlePageSelect}>
        {page === 1 ? page : 1}
      </Pagination.Item>
      <Pagination.Ellipsis disabled={page === 1} />

      <Pagination.Item
        active={page !== 1 && page !== pages && true}
        onClick={handlePageSelect}
      >
        {page === 1 ? 2 : page === pages ? pages - 1 : page}
      </Pagination.Item>

      <Pagination.Ellipsis disabled={page === pages} />
      <Pagination.Item active={page === pages} onClick={handlePageSelect}>
        {page === pages ? page : pages}
      </Pagination.Item>
      <Pagination.Next disabled={page === pages} onClick={handleNext} />
      <Pagination.Last disabled={page === pages} onClick={handleLast} />
    </Pagination>
  );
};
