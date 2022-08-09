// Required modules

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import likeRoutes from "./routes/likeRoutes.js";

// App variables

const app = express();
const PORT = process.env.PORT || 8080;

// App configuration

dotenv.config();
connectDb();
app.use(cors());
app.use(express.json());

// Routes

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);
app.use("/likes", likeRoutes);

// Server activation

app.listen(PORT, () => console.log(`weMedia is listening on port: ${PORT}`));
