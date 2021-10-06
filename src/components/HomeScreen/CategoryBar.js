import React from "react";
import Nav from "react-bootstrap/Nav";

export const CategoryBar = () => {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link>Tv, Audio y Video</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Celulares, Notebooks y Tecnología</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Electrodomésticos y Aires Ac.</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Hogar, Muebles y Jardín</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
