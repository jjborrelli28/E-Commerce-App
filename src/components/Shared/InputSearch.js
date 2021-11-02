import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsSearch } from "react-icons/bs";
import { useSearch } from "../../hooks/useSearch";

export const InputSearch = () => {
  const { value, handleInputChange, handleInputSearch } = useSearch();

  return (
    <Row xs={1} md={2} className="justify-content-md-center">
      <Col lg={3}></Col>
      <Col lg={6}>
        <Form className="form-container" onSubmit={handleInputSearch}>
          <InputGroup>
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
      </Col>
      <Col lg={3}></Col>
    </Row>
  );
};
