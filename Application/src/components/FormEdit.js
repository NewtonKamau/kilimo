import { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import FormContainer from "./FormContainer";
import Forms from "../Forms.js";

const FormEdit = () => {
    const [name, setName] = useState("");
    const [students, setStudents] = useState("");
    const [teacher, setTeacher] = useState("");
    const submitHandler = (e) => {
      e.preventDefault();
      alert("form updated");
    };
  return (
    <FormContainer>
      <h1 className="App">Register Form</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <FormControl
            type="text"
            required={true}
            name="name"
            placeholder="Enter form"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></FormControl>
        </Form.Group>
        <Form.Group controlId="students">
          <Form.Label>Students</Form.Label>
          <FormControl
            type="text"
            required={true}
            name="students"
            placeholder="Enter number of students"
            value={students}
            onChange={(e) => setStudents(e.target.value)}
          ></FormControl>
        </Form.Group>
        <Form.Group controlId="teacher">
          <Form.Label>Teacher</Form.Label>
          <FormControl
            type="text"
            required={true}
            placeholder="Enter class teacher name"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
          ></FormControl>
        </Form.Group>
        <br />
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </FormContainer>
  );
};

export default FormEdit;
