import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String, // Store HTML content from Quill
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the User model
    ref: "User",
    required: true,
  },
  authorName: {
    // Storing author's name directly for easier display
    type: String,
    required: true,
  },
  category: {
    type: String,
    trim: true,
    default: "General",
  },
  readTime: {
    type: String, // e.g., "5 min read"
    required: false,
  },
  image: {
    // Optional image URL for article thumbnail
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Article = mongoose.model("Article", ArticleSchema);
export default Article;
