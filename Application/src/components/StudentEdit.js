import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import FormContainer from "./FormContainer";

const StudentEdit = () => {
  const [student, setStudent] = useState({
    name: "",
    grade: "",
    teacher: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setStudent(student);
    console.log(setStudent);
  };
  const handleChange = () => {
    setStudent(student);
  };
  return (
    <div>
      <h1 className="App">Edit Student</h1>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="fName">
            <Form.Label>Name</Form.Label>
            <FormControl
              type="text"
              students
              name="name"
              placeholder="Enter name"
              value={student.name}
              onChange={handleChange}
            ></FormControl>
          </Form.Group>
          <Form.Group controlId="grade">
            <Form.Label>Grade</Form.Label>
            <FormControl
              type="text"
              name="grade"
              placeholder="Enter student grade"
              value={student.grade}
              onChange={handleChange}
            ></FormControl>
          </Form.Group>
          <Form.Group controlId="teacher">
            <Form.Label>Teacher</Form.Label>
            <FormControl
              type="text"
              name="teacher"
              placeholder="Enter techer name"
              value={student.teacher}
              onChange={handleChange}
            ></FormControl>
          </Form.Group>
          <br />
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default StudentEdit;
