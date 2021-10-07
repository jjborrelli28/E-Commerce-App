import React from "react";

export const Description = ({ data }) => {
  const description = data[0].description;

  return (
    <>
      {description && (
        <div>
          <h5 className="mb-3">Descripción:</h5>
          <div
            className="description mb-3"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      )}
    </>
  );
};
