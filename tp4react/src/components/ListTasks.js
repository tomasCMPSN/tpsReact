import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTask from "./ItemTask";

const ListTasks = (props) => {
  return (
    <ListGroup className="my-5">
      {props.arrayTasks.map((item, index) => (
        <ItemTask
          key={index}
          task={item}
          deleteTask={props.deleteTask}
        ></ItemTask>
      ))}
    </ListGroup>
  );
};

export default ListTasks;
