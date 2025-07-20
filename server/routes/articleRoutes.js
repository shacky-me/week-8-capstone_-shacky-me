import express from "express";
import {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../controllers/articleController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createArticle).get(getArticles);

router
  .route("/:id")
  .get(getArticleById)
  .put(protect, updateArticle)
  .delete(protect, deleteArticle);

export default router;
