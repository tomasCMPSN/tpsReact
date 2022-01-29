import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ListTasks from "./ListTasks";

const FormTasks = () => {
  let tasksLocalStorage = JSON.parse(localStorage.getItem("arrayTasks")) || [];
  const [taskIndividual, setTaskIndividual] = useState("");
  const [tasks, setTasks] = useState(tasksLocalStorage);

  useEffect(() => {
    localStorage.setItem("arrayTasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, taskIndividual]);
    setTaskIndividual("");
  };

  const deleteTask = (name) =>{
      let arrayModified = tasks.filter((item)=> item !== name);
      setTasks(arrayModified);
  }

  return (
    <div>
      <Form className="container my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="New task..."
            onChange={(e) => setTaskIndividual(e.target.value)}
            value={taskIndividual}
          />
          <Button variant="secondary" type="submit">
            Add
          </Button>
        </Form.Group>
      </Form>
      <ListTasks arrayTasks={tasks} deleteTask={deleteTask}></ListTasks>
    </div>
  );
};

export default FormTasks;
