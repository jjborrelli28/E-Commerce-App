import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const GridProducts = ({ data }) => {
  const handleSelectProduct = (e) => {
    console.log(e);
  };

  return (
    <Row xs={1} md={5} className="g-4">
      {data?.map((product) => (
        <Col key={product.productId}>
          <Card
            onClick={( ) => {
              handleSelectProduct(product.productId);
            }}
          >
            <Card.Img variant="top" src={product.items[0].images[0].imageUrl} />
            <Card.Body>
              <Card.Text>{product.productName}</Card.Text>
              {product.items[0].sellers[0].commertialOffer.ListPrice !==
                product.items[0].sellers[0].commertialOffer.Price && (
                <Card.Text className="discount-container">
                  <span className="discount-number">
                    $ {product.items[0].sellers[0].commertialOffer.ListPrice}
                  </span>
                  <span className="discount-percentage">
                    {100 -
                      Math.ceil(
                        (product.items[0].sellers[0].commertialOffer.Price /
                          product.items[0].sellers[0].commertialOffer
                            .ListPrice) *
                          100
                      )}
                    % OFF
                  </span>
                </Card.Text>
              )}
              <Card.Title className="price">
                $ {product.items[0].sellers[0].commertialOffer.Price}
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
