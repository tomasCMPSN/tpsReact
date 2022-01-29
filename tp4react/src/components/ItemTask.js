import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const ItemTask = (props) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {props.task}
      <Button variant="danger" onClick={() => props.deleteTask(props.task)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTask;
