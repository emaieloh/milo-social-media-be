import express from "express";
import { getComments, addComment } from "../controllers/commentControllers.js";

const router = express.Router();

router.get("/all", getComments);
router.post("/add", addComment);

export default router;
