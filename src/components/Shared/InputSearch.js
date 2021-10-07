import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { BsSearch } from "react-icons/bs";
import { useSearch } from "../../hooks/useSearch";

export const InputSearch = () => {
  const { value, handleInputChange, handleInputSearch } = useSearch();

  return (
    <Row xs={1} md={2} className="g-4 justify-content-md-center">
      <Form className="form-container" onSubmit={handleInputSearch}>
        <InputGroup className="mt-5">
          <FormControl
            placeholder="Buscar productos"
            aria-label="Buscar productos"
            aria-describedby="basic-addon2"
            value={value}
            onChange={handleInputChange}
          />
          <Button
            variant="primary"
            id="button-addon2"
            onClick={handleInputSearch}
          >
            <BsSearch />
          </Button>
        </InputGroup>
      </Form>
    </Row>
  );
};
