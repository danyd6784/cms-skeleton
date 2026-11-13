//The router only cares about making sure the http routes get sent to the right handlers
//high level
import express from "express";
import canonicalPersonController from "./canonical.person.controller.js";
const canonicalPersonRouter = express.Router();

canonicalPersonRouter.get("/", canonicalPersonController.getAll);
canonicalPersonRouter.get("/:id", canonicalPersonController.getById);
/*
canonicalPersonRouter.get("/:id/personRecords/", canonicalPersonController.getAllPersonRecords);
*/
canonicalPersonRouter.post("/", canonicalPersonController.create); //add a canonical person record
/*
canonicalPersonRouter.post("/:id/"); //add a person association to the canonical person record

canonicalPersonRouter.put("/:id"); //update a canonical personRecord

canonicalPersonRouter.delete('/:id', ) //delete a canonical person record
canonicalPersonRouter.delete('/:id/') //delete a person record association from the person record
*/
export default canonicalPersonRouter;
