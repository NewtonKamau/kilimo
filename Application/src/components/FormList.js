import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


const FormList = () => {
  const [forms, setForms] = useState([]);

  //useEffect to read data from the api
  useEffect(() => {
    const fetchForms = async () => {
      const { data } = await axios.get("/api/forms");
      setForms(data);
    };
    fetchForms();
  }, []);
  const deleteHander = (id) => {
    alert("Are you sure you want to delete the form");
  };
  return (
    <div>
      <h1 className="App">Forms List</h1>
      <Container style={{ padding: "5px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Students</th>
              <th>Teacher</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((form) => (
              <tr key={form.id}>
                <td>{form.id}</td>
                <td>{form.name}</td>
                <td>{form.students}</td>
                <td>{form.teacher}</td>
                <td>
                  {
                    <>
                      <Button
                        className="btn btn-sm "
                        variant="danger"
                        onClick={() => deleteHander(form.id)}
                      >
                        Delete
                      </Button>
                      <a href={`/form/${form.id}`}>
                        <Button className="btn btn-secondary">Edit</Button>
                      </a>
                    </>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <LinkContainer to="/">
          <Button className="btn btn-primary">Create new form</Button>
        </LinkContainer>
      </Container>
    </div>
  );
};

export default FormList;
