import express from "express";
import {
  createForm,
  getFormById,
  getForms,
  updateForm,
  deleteForm,
} from "../controller/formController.js";

const router = express.Router();

router.route("/").get(getForms).post(createForm);
router
  .route("/:id")
  .get(getFormById)
  .delete(deleteForm)
  .put(updateForm);

export default router;
