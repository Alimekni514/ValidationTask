import express from "express";
import {
createCategory} from "../controllers/Category.js";
const router = express.Router();



router.post("/", createCategory);



export default router;