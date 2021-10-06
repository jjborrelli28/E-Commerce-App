import React from "react";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";

export const TechnicalSpecifications = ({ data }) => {
  return (
    <>
      {data[0].allSpecificationsGroups && (
        <div>
          <h5>Especificaciones técnicas:</h5>
          <Accordion defaultActiveKey="0" className="mb-3">
            {data[0].allSpecificationsGroups.map(
              (specification) =>
                specification !== "Filtros" && (
                  <>
                    <Accordion.Item eventKey={specification}>
                      <Accordion.Header>{specification}</Accordion.Header>
                      <Accordion.Body>
                        <Table striped bordered hover size="sm" responsive="md">
                          <tbody>
                            <tr>
                              <td>
                                {data[0][specification].map((item, i) => (
                                  <p key={item + i}>{item}</p>
                                ))}
                              </td>
                              <td>
                                {data[0][specification].map((item, i) => (
                                  <p key={item + i}>{data[0][item]}</p>
                                ))}
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </>
                )
            )}
          </Accordion>
        </div>
      )}
    </>
  );
};
