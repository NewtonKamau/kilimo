const express = require("express");
const students = require("./data/Students");
const forms = require("./data/Forms");

const app = express();
app.use(express.json());
//routes
app.get("/",(req, res)=> {
    res.send("API is running")
});
//get all students from the api
app.get("/api/students", (req, res) => {
    res.json(students)
});
//get specific student
app.get("/api/students/:id", (req, res) => {
    const student = students.find((s) => s.id === req.params.id)
    console.log(student);
    res.json(student)
});
//update a single student
app.put("/student/:id", (req, res) => {
    const { name, sex, grade, teacher } = req.body;

});

//get all forms 
app.get("/api/forms", (req, res) => {
    res.json(forms)
});

//get specific form
app.get("/api/form/:id", (req, res) => {
    const form = forms.find((f)=> f.id === req.params.id)
    res.json(form);
});


app.listen(5000, console.log("Server is running on port port 5000"));