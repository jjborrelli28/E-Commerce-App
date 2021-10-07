import React from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { ImageCarousel } from "./ImageCarousel";
import Spinner from "react-bootstrap/Spinner";
import { BrandNamePrice } from "./BrandNamePrice";
import { TechnicalSpecifications } from "./TechnicalSpecifications";
import { InputSearch } from "../shared/InputSearch";
import { Promotions } from "./Promotions";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { Description } from "./Description";
import { GridProducts } from "../shared/GridProducts";

export const ProductScreen = () => {
  const { productId } = useParams();

  const url = `/api/catalog_system/pub/products/search/?fq=productId:${productId}`;

  const urlCrossSelling = `/api/catalog_system/pub/products/crossselling/whosawalsosaw/${productId}`;

  const { data } = useFetch(url);

  const { data: dataCrossSelling } = useFetch(urlCrossSelling);

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
          <div className="card-product mb-3">
            <div className="carousel-container">
              <ImageCarousel images={data[0].items[0].images} />
            </div>
            <div className="main-data">
              <BrandNamePrice product={data} />
              <div>
                <Promotions promotions={data} />
                <Button
                  variant="primary"
                  onClick={handleBuy}
                  style={{ fontWeight: "bold", width: "100%" }}
                >
                  COMPRAR
                </Button>
              </div>
            </div>
          </div>
          <TechnicalSpecifications specifications={data} />
          <Description data={data} />
          <h5 className="mt-3 mb-3">
            Personas interesadas en este producto también vieron:
          </h5>
          {dataCrossSelling && (
            <GridProducts products={dataCrossSelling.slice(0, 4)} n={4} />
          )}
          <Button
            variant="secondary"
            onClick={handleBack}
            style={{ fontWeight: "bold" }}
            className="mt-3"
          >
            VOLVER
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
