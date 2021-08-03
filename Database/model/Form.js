
import mongoose from "mongoose";

const formSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  student: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
});

const Form = mongoose.model("Form", formSchema);
export default Form;