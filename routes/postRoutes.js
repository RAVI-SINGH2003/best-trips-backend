import express from "express";
import {
  getPosts,
  getPostsBySearch,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/postController.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/search", getPostsBySearch)
router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
