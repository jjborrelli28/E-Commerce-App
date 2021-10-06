import React from "react";

export const NameNPrice = ({ data }) => {
  console.log(data);
  return (
    <>
      <h5 className="product-name">{data[0].brand}</h5>
      <h5 className="product-name">{data[0].items[0].nameComplete}</h5>
      {data[0].items[0].sellers[0].commertialOffer.ListPrice !==
        data[0].items[0].sellers[0].commertialOffer.Price && (
        <h5 className="discount-container-ps">
          <span className="discount-number">
            $ {data[0].items[0].sellers[0].commertialOffer.ListPrice}
          </span>
          <span className="discount-percentage">
            {100 -
              Math.ceil(
                (data[0].items[0].sellers[0].commertialOffer.Price /
                  data[0].items[0].sellers[0].commertialOffer.ListPrice) *
                  100
              )}
            % OFF
          </span>
        </h5>
      )}
      <h5 className="price-ps mb-3">
        $ {data[0].items[0].sellers[0].commertialOffer.Price}
      </h5>
    </>
  );
};
