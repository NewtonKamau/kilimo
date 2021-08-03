import asyncHandler from "express-async-handler";
import Form from "../model/Form.js";

//get all Forms
//@desc fetch all Form
//@route GET api/Forms
//access Public
const getForms = asyncHandler(async (req, res) => {
  const form = await Form.find();
  res.json(form);
});

//get Form by id
//@route GET api/Forms/:id
//access Public
const getFormById = asyncHandler(async (req, res) => {
  const form = await Form.findById(req.params.id);
  if (form) {
    res.json(form);
  } else {
    res.status(404);
    throw new Error("Not Found");
  }
});

//create Form
//@route POST api/Forms/
//access Public
const createForm = asyncHandler(async (req, res) => {
  const form = new Form({
    name: req.body.name,
    student: req.body.student,
    teacher: req.body.teacher,
  });
  const createdForm = await form.save();
  res.status(201).json(createdForm);
});

//update Form
//@route PUT api/Forms/
//access Public
const updateForm = asyncHandler(async (req, res) => {
  const { name, student, teacher } = req.body;
  const form = await Form.findById(req.params.id);
  if (form) {
    (form.name = name), (form.student = student), (form.teacher = teacher);
    const updatedForm = form.save();
    res.status(201).json(updatedForm);
  } else {
    res.status(404);
    throw new Error("Form not found");
  }
});

//delete Form
//@route DELETE api/Forms/:id
//access public
const deleteForm = asyncHandler(async (req, res) => {
  const form = await Form.findById(req.params.id);
  if (form) {
    form.remove();
    res.json({ message: "Form removed" });
  } else {
    res.status(404);
    throw new Error("Not Found");
  }
});

export {
  getForms,
  getFormById,
  updateForm,
  createForm,
  deleteForm,
};
