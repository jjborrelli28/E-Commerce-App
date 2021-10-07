import React from "react";

export const BrandNamePrice = ({ product }) => {
  const commertialOffer = product[0].items[0].sellers[0].commertialOffer;

  return (
    <div>
      <h5 className="product-name">{product[0].brand}</h5>
      <h5 className="product-name">{product[0].items[0].nameComplete}</h5>
      {commertialOffer.ListPrice !== commertialOffer.Price && (
        <h5 className="discount-container-ps">
          <span className="discount-number">$ {commertialOffer.ListPrice}</span>
          <span className="discount-percentage">
            {100 -
              Math.ceil(
                (commertialOffer.Price / commertialOffer.ListPrice) * 100
              )}
            % OFF
          </span>
        </h5>
      )}
      <h5 className="price-ps mb-3">$ {commertialOffer.Price}</h5>
    </div>
  );
};
