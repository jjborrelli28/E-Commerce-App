import React from "react";
import Table from "react-bootstrap/Table";
import { cardImages } from "../../helpers/cardImages";
import { AllPaymentMethods } from "./AllPaymentMethods";

export const Promotions = ({ promotions }) => {
  const installments =
    promotions[0].items[0].sellers[0].commertialOffer.Installments;

  return (
    <Table striped bordered hover className="table-promotions">
      <tbody>
        {installments
          .filter(
            (promotion) =>
              (promotion.InterestRate === 0 &&
                promotion.NumberOfInstallments !== 1) ||
              promotion.PaymentSystemName === "Mercado Pago"
          )
          .map(
            (promotion, i) =>
              i < 5 && (
                <tr key={promotion.PaymentSystemName + i}>
                  <td>
                    <img
                      src={cardImages[promotion.PaymentSystemName]}
                      alt={promotion.PaymentSystemName}
                      className="card-image"
                    />
                    {promotion.NumberOfInstallments}{" "}
                    {promotion.NumberOfInstallments > 1 ? "cuotas" : "cuota"}{" "}
                    <span className="green-text">
                      {promotion.InterestRate === 0 ? "sin interés" : "fijas"}{" "}
                      de $ {promotion.Value}
                    </span>
                  </td>
                </tr>
              )
          )}
        <tr>
          <td>
            <AllPaymentMethods paymentMethods={promotions} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
