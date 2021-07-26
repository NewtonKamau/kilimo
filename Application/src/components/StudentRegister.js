import {useState} from 'react'
import { Form, Button, FormControl } from "react-bootstrap";
import FormContainer from "./FormContainer";

const StudentRegister = () => {
    const [student,setStudent] = useState({
      fName: "",
      sex: "",
      grade: "",
      teacher: "",
    });
    const handleChange = (e) => {
        const newStudent = e.target.value;
        const inputStudent = e.target.value;
        setStudent(() => {
            if (
              inputStudent === "fName" &&
              inputStudent === "sex" &&
              inputStudent === "grade" &&
              inputStudent === "teacher"
            ) {
                setStudent(newStudent)
                //console.log(setStudent);
            }
        })
        console.log(newStudent);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        alert("New student added");
    }
    return (
      <FormContainer>
        <h1 className="App">Register New Student</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="fName">
            <Form.Label>Name</Form.Label>
            <FormControl
              type="text"
              required={true}
              name="fName"
              placeholder="Enter name"
              value={student.fName}
              onChange={handleChange}
            ></FormControl>
          </Form.Group>
          <Form.Group controlId="sex">
            <Form.Label>Sex</Form.Label>
            <FormControl
              type="text"
              required={true}
              name="sex"
              placeholder="Enter sex"
              value={student.sex}
              onChange={handleChange}
            ></FormControl>
          </Form.Group>
          <Form.Group controlId="grade">
            <Form.Label>Grade</Form.Label>
            <FormControl
              type="text"
              required={true}
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
              required={true}
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
    );
}

export default StudentRegister
