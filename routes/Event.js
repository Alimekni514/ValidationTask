import express from "express";
import { eventValidationSchema } from "../validations/eventSchema.js";
import { createTask } from "../controllers/Event.js";
import { validateEvent } from "../middlewares/Event.js";
const router = express.Router();

router.post("/events", validateEvent, createTask);

export default router;
