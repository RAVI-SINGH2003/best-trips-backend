import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {} from "dotenv/config";
import { connectDB } from "./config/db.js";
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";

connectDB();
const app = express();

app.use(bodyParser.json({ limit: "30 mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30 mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

// mongoose.set("useFindAndModify", false);
