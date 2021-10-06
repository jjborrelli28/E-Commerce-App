import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { paymentMethod } from "../../helpers/paymentMethod";
import Swal from "sweetalert2";

export const Promotions = ({ data }) => {
  const handleDemo = () => {
    Swal.fire({
      icon: "info",
      title: "Link Demo",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <Table striped bordered hover>
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
                    src={paymentMethod[data.PaymentSystemName]}
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
            <Link to="#" onClick={handleDemo} style={{ paddingLeft: "0.5rem" }}>
              Ver cuotas y todos los medios de pago
            </Link>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
