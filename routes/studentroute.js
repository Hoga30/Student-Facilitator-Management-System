import express from "express"
import studentController from "../controlles/studentcontrolle.js"
const route = express.Router();

route.post("/student/create",studentController.createNewStudent);
route.get("/student/list",studentController.getAllStudent)
route.get("/student/:id",studentController.getStudentId)
route.get("/student/h/:email",studentController.getStudentByEmail)
route.put("/student/updateStudent/:id",studentController.updateStudent);
route.delete("/student/l/:id",studentController.deleteStudent)

export default route;