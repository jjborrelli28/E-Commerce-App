import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const ImageCarousel = ({ images }) => {
  return (
    <Carousel variant="dark" className="mb-3 carousel">
      {images.map((image) => (
        <Carousel.Item key={image.imageId}>
          <img
            className="d-block w-100"
            src={image.imageUrl}
            alt={image.imageUrl}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
