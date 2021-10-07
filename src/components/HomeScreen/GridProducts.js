import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router";

export const GridProducts = ({ products }) => {
  let history = useHistory();

  const handleSelectProduct = (productId) => {
    history.push(`/${productId}`);
  };

  return (
    <Row xs={1} md={5} className="g-4">
      {products.map((product) => {
        const firstItem = product.items[0];
        const commertialOffer = firstItem.sellers[0].commertialOffer;

        return (
          <Col key={product.productId}>
            <Card
              onClick={() => {
                handleSelectProduct(product.productId);
              }}
            >
              <Card.Img variant="top" src={firstItem.images[0].imageUrl} />
              <Card.Body>
                <Card.Text>{product.productName}</Card.Text>
                {commertialOffer.ListPrice !== commertialOffer.Price && (
                  <Card.Text className="discount-container">
                    <span className="discount-number">
                      $ {commertialOffer.ListPrice}
                    </span>
                    <span className="discount-percentage">
                      {100 - Math.ceil(commertialOffer.ListPrice * 100)}% OFF
                    </span>
                  </Card.Text>
                )}
                <Card.Title className="price">
                  $ {commertialOffer.Price}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};
