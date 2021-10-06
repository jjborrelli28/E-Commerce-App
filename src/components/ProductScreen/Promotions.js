import React from "react";
import Table from "react-bootstrap/Table";
import { paymentMethod } from "../../helpers/paymentMethod";

export const Promotions = ({ data }) => {
  return (
    <Table striped bordered hover>
      <tbody>
        {data[0].items[0].sellers[0].commertialOffer.Installments.filter(
          (promo) =>
            promo.InterestRate === 0 && promo.NumberOfInstallments !== 1
        ).map((data, i) => (
          <tr key={data.PaymentSystemName + i}>
            <td>
              <img
                src={paymentMethod[data.PaymentSystemName]}
                alt={data.PaymentSystemName}
                className="paymentMethod"
              />
              {data.NumberOfInstallments} cuotas
              <span className="promotion"> sin interés de $ {data.Value}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
