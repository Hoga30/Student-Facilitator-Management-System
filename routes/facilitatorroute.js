import express from "express";
import facilitatorController from "../controlles/facilitatorcontrolle.js";
const facilitatorRoute = express.Router();

facilitatorRoute.post("/facilitator/create",facilitatorController.createNewFacilitator);
facilitatorRoute.get("/facilitator/list",facilitatorController.getAllFacilitator)
facilitatorRoute.get("/facilitator/:id",facilitatorController.getFacilitatorId)
facilitatorRoute.get("/facilitator/f/:email",facilitatorController.getFacilitatorByEmail)
facilitatorRoute.put("/facilitator/updateFacilitator/:id",facilitatorController.updateFacilitator);
facilitatorRoute.delete("/facilitator/d/:id",facilitatorController.deleteFacilitator)

export default facilitatorRoute;