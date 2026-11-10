import express from "express";
import canonicalPersonRouter from "./features/canonical-person/canonical.person.router.js";

const apiRouter = express.Router();

apiRouter.use("/canonical-people", canonicalPersonRouter);

export default apiRouter;
