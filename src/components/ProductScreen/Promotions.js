import React from "react";
import Table from "react-bootstrap/Table";
import { cardImages } from "../../helpers/cardImages";
import { PaymentMethod } from "./PaymentMethod";

export const Promotions = ({ data }) => {
  return (
    <Table striped bordered hover className="table-promotions">
      <tbody>
        {data[0].items[0].sellers[0].commertialOffer.Installments.filter(
          (promo) =>
            (promo.InterestRate === 0 && promo.NumberOfInstallments !== 1) ||
            promo.PaymentSystemName === "Mercado Pago"
        ).map(
          (data, i) =>
            i < 5 && (
              <tr key={data.PaymentSystemName + i}>
                <td>
                  <img
                    src={cardImages[data.PaymentSystemName]}
                    alt={data.PaymentSystemName}
                    className="paymentMethod"
                  />
                  {data.NumberOfInstallments}{" "}
                  {data.NumberOfInstallments > 1 ? "cuotas" : "cuota"}{" "}
                  <span className="promotion">
                    {data.InterestRate === 0 ? "sin interés" : "fijas"} de ${" "}
                    {data.Value}
                  </span>
                </td>
              </tr>
            )
        )}
        <tr>
          <td>
            <PaymentMethod data={data} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
