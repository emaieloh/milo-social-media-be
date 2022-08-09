import express from "express";
import { getLikes, likePost } from "../controllers/likeControllers.js";

const router = express.Router();

router.get("/all", getLikes);
router.post("/like/:postId/:userId", likePost);

export default router;
