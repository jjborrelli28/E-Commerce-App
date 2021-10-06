import React from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { ImageCarousel } from "./ImageCarousel";
import Spinner from "react-bootstrap/Spinner";
import { NameNPrice } from "./NameNPrice";
import { TechnicalSpecifications } from "./TechnicalSpecifications";
import { InputSearch } from "../HomeScreen/InputSearch";
import { ShoppingCart } from "./ShoppingCart";
import { Promotions } from "./Promotions";

export const ProductScreen = () => {
  const { productId } = useParams();

  const url = `/api/catalog_system/pub/products/search/?fq=productId:${productId}`;

  const { data, loading, error } = useFetch(url);

  data &&
    console.log(
      data[0].items[0].sellers[0].commertialOffer.Installments.filter(
        (promo) => promo.InterestRate === 0 && promo.NumberOfInstallments !== 1
      )
    );
  return (
    <Container>
      <InputSearch />
      {data ? (
        <div className="container-product-screen">
          <header>
            <div className="carousel-container">
              <ImageCarousel images={data[0].items[0].images} />
            </div>
            <div className="main-data">
              <NameNPrice data={data} />
              <Promotions data={data} />
              <ShoppingCart />
            </div>
          </header>
          <TechnicalSpecifications data={data} />
          <h5>Descripción</h5>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: data[0].description }}
          ></div>
        </div>
      ) : (
        <div className="spinner-container">
          <Spinner animation="grow" variant="primary" />
        </div>
      )}
    </Container>
  );
};
