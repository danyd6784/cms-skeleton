import express from "express";
import canonicalPersonRouter from "canonical.person.router.js";

const apiRouter = express.Router();

apiRouter.use("/canonicalPerson", canonicalPersonRouter);

export default apiRouter;
