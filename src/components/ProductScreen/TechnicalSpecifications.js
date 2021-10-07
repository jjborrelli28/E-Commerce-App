import React from "react";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";

export const TechnicalSpecifications = ({ specifications }) => {
  const allSpecificationsGroups = specifications[0].allSpecificationsGroups;

  return (
    <>
      {allSpecificationsGroups && (
        <div>
          <h5>Especificaciones técnicas:</h5>
          <Accordion defaultActiveKey="0" className="mb-3">
            {allSpecificationsGroups.map(
              (specification) =>
                specification !== "Filtros" && (
                  <Accordion.Item key={specification} eventKey={specification}>
                    <Accordion.Header>{specification}</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover size="sm" responsive>
                        <tbody>
                          <tr>
                            <td>
                              {specifications[0][specification].map(
                                (specification) => (
                                  <p key={specification}>{specification}</p>
                                )
                              )}
                            </td>
                            <td>
                              {specifications[0][specification].map(
                                (specification) => (
                                  <p key={specification}>
                                    {specifications[0][specification]}
                                  </p>
                                )
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                )
            )}
          </Accordion>
        </div>
      )}
    </>
  );
};
