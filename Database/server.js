import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentsRoute.js";
import formRoutes from "./routes/formRoute.js";


const app = express();
app.use(cors())
app.use(express.json());
connectDB();
app.use("/api/students", studentRoutes);
app.use("/api/forms", formRoutes);


//routes
app.get("/",(req, res)=> {
    res.send("API is running")
});




app.listen(5000, console.log("Server is running on port port 5000"));