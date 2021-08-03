import mongoose from "mongoose";

const studentSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  }
});

const Student = mongoose.model("Student", studentSchema);
export default Student;