import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const StudentList = () => {
  //use state to read ui data changes
  const [students, setStudent] = useState([]);

  //useEffect to read data from the api
  useEffect(() => {
    const fetchStudents = async () => {
      const {data} = await axios.get("/api/students");
      setStudent(data)
    }
    fetchStudents()
  },[])

  const submitHandler = (id) => {
    window.alert("Are you sure ?");
   // Students.pop(id)
  }
  return (
    <div>
      <h1 className="App">Students List</h1>
      <Container style={{ padding: "5px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Full Name</th>
              <th>Sex</th>
              <th>Grade</th>
              <th>Teacher</th>
              <th>Action</th>
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
                <td>
                  {
                    <>
                      <Button
                        className="btn btn-sm "
                        variant="danger"
                        type="submit"
                        onClick={()=>submitHandler(student.id)}
                      >
                        Delete
                      </Button>
                      <a href={`/student/${student.id}`}>
                        <Button className="btn btn-secondary">Edit</Button>
                      </a>
                    </>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <LinkContainer to="/student/create">
          <Button className="btn btn-primary">Add New Student</Button>
        </LinkContainer>
      </Container>
    </div>
  );
}

export default StudentList
