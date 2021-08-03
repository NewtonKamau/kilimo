import asyncHandler from "express-async-handler";
import Student from "../model/StudentModel.js";

//get all students
//@desc fetch all student
//@route GET api/students
//access Public
const getStudents = asyncHandler (async (req, res) => {
    const student = await Student.find();
    res.json(student)
})

//get student by id
//@route GET api/students/:id
//access Public
const getStudentById = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (student) {
    res.json(student);
  } else {
    res.status(404);
    throw new Error("Not Found");
  }
});

//create student 
//@route POST api/students/
//access Public
const createStudent = asyncHandler( async(req, res) => {
    const student = new Student({
        name : req.body.name,
        sex : req.body.sex,
        grade : req.body.grade,
        teacher : req.body.teacher
    })
    const createdStudent = await student.save();
    res.status(201).json(createdStudent)
})

//update student 
//@route PUT api/students/
//access Public
const updateStudent = asyncHandler (async (req, res) => {
    const { name, grade, teacher } = req.body
    const student =  await Student.findById(req.params.id)
    if (student) {
        student.name = name,
        student.grade = grade,
        student.teacher = teacher
        const updatedStudent = student.save()
        res.status(201).json(updatedStudent)
    } else {
        res.status(404)
  throw new Error("student not found")
    }
})

//delete student
//@route DELETE api/students/:id
//access public
const deleteStudent = asyncHandler ( async(req, res) => {
    const student = await Student.findById(req.params.id);
 if (student) {
    student.remove()
   res.json({message:"student removed"});
 } else {
   res.status(404);
   throw new Error("Not Found");
 }
})

export {getStudents,getStudentById,updateStudent,createStudent,deleteStudent}

