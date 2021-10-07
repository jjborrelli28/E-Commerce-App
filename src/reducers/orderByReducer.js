import { types } from "../types/types";

const initialState = {
  valueOrderBy: "O=OrderByReviewRateDESC",
  nameOrderBy: "Más relevante",
};

export const orderByReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MAS_RELEVANTE:
      return {
        valueOrderBy: "O=OrderByReviewRateDESC",
        nameOrderBy: action.payload,
      };

    case types.MENOR_PRECIO:
      return { valueOrderBy: "O=OrderByPriceASC", nameOrderBy: action.payload };

    case types.MAYOR_PRECIO:
      return {
        valueOrderBy: "O=OrderByPriceDESC",
        nameOrderBy: action.payload,
      };

    case types.MAYOR_DESCUENTO:
      return {
        valueOrderBy: "O=OrderByBestDiscountDESC",
        nameOrderBy: action.payload,
      };

    default:
      return state;
  }
};
