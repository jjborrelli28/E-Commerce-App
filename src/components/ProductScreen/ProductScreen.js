import React from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { ImageCarousel } from "./ImageCarousel";
import Spinner from "react-bootstrap/Spinner";

export const ProductScreen = () => {
  const { productId } = useParams();

  const url = `/api/catalog_system/pub/products/search/?fq=productId:${productId}&_from=0&_to=49`;

  const { data, loading, error } = useFetch(url);

  data && console.log(data[0]);
  return (
    <Container>
      {data ? (
        <>
          <ImageCarousel images={data[0].items[0].images} />
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
          <h5 className="price-ps">
            $ {data[0].items[0].sellers[0].commertialOffer.Price}
          </h5>
          <h5>Descripción</h5>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: data[0].description }}
          ></div>
        </>
      ) : (
        <div className="spinner-container">
          <Spinner animation="grow" variant="primary" />
        </div>
      )}
    </Container>
  );
};
