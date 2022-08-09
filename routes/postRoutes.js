import express from "express";
import multer from "multer";
import { storage } from "../cloudinary/index.js";
import {
  getPosts,
  addPost,
  deletePost,
} from "../controllers/postControllers.js";

const router = express.Router();
const image = multer({ storage });

router.get("/all", getPosts);
router.post("/add", image.single("image"), addPost);
router.delete("/delete/:post_id/:img", deletePost);

export default router;
