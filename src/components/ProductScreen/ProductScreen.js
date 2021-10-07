import React from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { ImageCarousel } from "./ImageCarousel";
import Spinner from "react-bootstrap/Spinner";
import { NameNPrice } from "./NameNPrice";
import { TechnicalSpecifications } from "./TechnicalSpecifications";
import { InputSearch } from "../HomeScreen/InputSearch";
import { Promotions } from "./Promotions";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export const ProductScreen = () => {
  const { productId } = useParams();

  const url = `/api/catalog_system/pub/products/search/?fq=productId:${productId}`;

  const { data } = useFetch(url);

  const history = useHistory();

  const handleBack = () => {
    history.push("/");
  };

  const handleBuy = () => {
    Swal.fire({
      icon: "success",
      title: "Tu producto se agrego al carrito correctamente",
      text: "(DEMO)",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <Container>
      <InputSearch />
      <hr />
      {data ? (
        <div className="container-product-screen mb-3">
          <header className="mb-3">
            <div className="carousel-container">
              <ImageCarousel images={data[0].items[0].images} />
            </div>
            <div className="main-data">
              <div>
                <NameNPrice data={data} />
              </div>
              <div>
                <Promotions data={data} />
                <Button
                  variant="primary"
                  className="btn-buy"
                  onClick={handleBuy}
                >
                  <strong>COMPRAR</strong>
                </Button>
              </div>
            </div>
          </header>
          <TechnicalSpecifications data={data} />
          <h5 className="mb-3">Descripción:</h5>
          <div
            className="description mb-3"
            dangerouslySetInnerHTML={{ __html: data[0].description }}
          ></div>
          <Button variant="secondary" onClick={handleBack}>
            <strong>VOLVER</strong>
          </Button>
        </div>
      ) : (
        <div className="spinner-container">
          <Spinner animation="grow" variant="primary" />
        </div>
      )}
    </Container>
  );
};
