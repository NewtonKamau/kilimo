import express from "express";
import { createStudent, getStudentById, getStudents, updateStudent,deleteStudent } from "../controller/studentController.js";
 
const router = express.Router();

router.route("/").get(getStudents).post(createStudent);
router.route("/:id").get(getStudentById).delete(deleteStudent).put(updateStudent);

export default router;