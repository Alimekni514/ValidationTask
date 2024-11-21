import express from "express";
import {
  createAuthor
} from "../controllers/Author.js";
const router = express.Router();



router.post("/", createAuthor);



export default router;