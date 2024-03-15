import express from "express";
const app = express();
const port = 6000;
import mongoose from "mongoose";
import route from "./routes/studentroute.js";
import facilitatorRoute from "./routes/facilitatorroute.js";

app.use(express.json())
app.use(route)
app.use(facilitatorRoute)

mongoose.connect("mongodb://localhost:27017/Student-Facilitator")
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})