import express from "express";
import Post from "../models/Post.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// @route   GET /api/posts
// @desc    Get all blog posts (latest first)
// @access  Public
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "username") // get author's username
      .sort({ createdAt: -1 }); // latest first

    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   GET /api/posts/:id
// @desc    Get a single blog post by ID
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "author",
      "username"
    );

    if (!post) return res.status(404).json({ message: "Post not found" });

    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   POST /api/posts
// @desc    Create a new blog post
// @access  Private
router.post("/", protect, async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newPost = await Post.create({
      title,
      content,
      author: req.user.id, // from authMiddleware
    });

    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   DELETE /api/posts/:id
// @desc    Delete a post (only author)
// @access  Private
router.delete("/:id", protect, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    // Only author can delete
    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await post.deleteOne();
    res.json({ message: "Post deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
