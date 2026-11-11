import express from 'express';
import apiRouter from './api.router.js';

const app = express();

app.use(express.json());
app.use(express.static('public'))
app.use("/api", apiRouter)

export default app;
