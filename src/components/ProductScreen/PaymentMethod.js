import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import Table from "react-bootstrap/Table";
import { cardImages } from "../../helpers/cardImages";

export const PaymentMethod = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(data[0].items[0].sellers[0].commertialOffer.Installments);
  return (
    <>
      <Link to="#" onClick={handleShow} style={{ paddingLeft: "0.5rem" }}>
        Ver cuotas y todos los medios de pago <MdNavigateNext />
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Medios de pago</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table
            striped
            bordered
            hover
            size="sm"
            responsive
            className="table-payment-method"
          >
            <thead>
              <tr>
                <th>Tarjeta</th>
                <th>Cant. de cuotas</th>
                <th>Valor de la cuota</th>
                <th>Precio total financiado</th>
                <th>Intereses</th>
              </tr>
            </thead>
            <tbody>
              {data[0].items[0].sellers[0].commertialOffer.Installments.map(
                (promo, i) => (
                  <tr key={i}>
                    <td>
                      {
                        <img
                          src={cardImages[promo.PaymentSystemName]}
                          alt={promo.PaymentSystemName}
                          className="paymentMethod"
                        />
                      }
                    </td>
                    <td>{promo.NumberOfInstallments}</td>
                    <td>${promo.Value}</td>
                    <td>${promo.TotalValuePlusInterestRate}</td>
                    <td>
                      $
                      {(
                        promo.TotalValuePlusInterestRate -
                        data[0].items[0].sellers[0].commertialOffer.Price
                      ).toFixed(2)}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
