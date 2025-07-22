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
// Get all articles for homepage
router.get("/homepage", async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 }).limit(6);
    const featuredArticle = await Article.findOne({ isFeatured: true });

    res.json({ featuredArticle, articles });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

router
  .route("/:id")
  .get(getArticleById)
  .put(protect, updateArticle)
  .delete(protect, deleteArticle);

export default router;
