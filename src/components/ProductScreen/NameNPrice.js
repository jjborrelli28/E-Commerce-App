import React from "react";

export const NameNPrice = ({ product }) => {
  return (
    <>
      <h5 className="product-name">{product[0].brand}</h5>
      <h5 className="product-name">{product[0].items[0].nameComplete}</h5>
      {product[0].items[0].sellers[0].commertialOffer.ListPrice !==
        product[0].items[0].sellers[0].commertialOffer.Price && (
        <h5 className="discount-container-ps">
          <span className="discount-number">
            $ {product[0].items[0].sellers[0].commertialOffer.ListPrice}
          </span>
          <span className="discount-percentage">
            {100 -
              Math.ceil(
                (product[0].items[0].sellers[0].commertialOffer.Price /
                  product[0].items[0].sellers[0].commertialOffer.ListPrice) *
                  100
              )}
            % OFF
          </span>
        </h5>
      )}
      <h5 className="price-ps mb-3">
        $ {product[0].items[0].sellers[0].commertialOffer.Price}
      </h5>
    </>
  );
};
