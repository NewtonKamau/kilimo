import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const SingleStudent = () => {
  //use state to read ui data changes
  const [students, setStudent] = useState([]);

  //useEffect to read data from the api
  useEffect(() => {
    const fetchStudents = async () => {
      const { data } = await axios.get("/api/students/:id");
      setStudent(data);
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h1 className="App">Students View</h1>
      <Container style={{ padding: "5px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Full Name</th>
              <th>Sex</th>
              <th>Grade</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.sex}</td>
                <td>{student.grade}</td>
                <td>{student.teacher}</td>
               
              </tr>
            ))}
          </tbody>
        </Table>
        <LinkContainer to="/students">
          <Button className="btn btn-primary">View All</Button>
        </LinkContainer>
      </Container>
    </div>
  );
};

export default SingleStudent;
