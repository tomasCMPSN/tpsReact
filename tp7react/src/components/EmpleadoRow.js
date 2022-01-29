import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = (props) => {
  return (
    <Row className="mb-3">
      <Col xs={4}>
        <EmpleadoAvatar />
      </Col>
      <Col className="d-flex flex-column justify-content-center">
        <h1>{props.name}</h1>
        <h3>{props.title}<Badge bg="primary" className="ms-2">{props.deparment}</Badge></h3>
      </Col>
    </Row>
  );
};

export default EmpleadoRow;
