import Article from "../models/Article.js";
import User from "../models/User.js";

// @desc    Create a new article
// @route   POST /api/articles
// @access  Private (requires token)
const createArticle = async (req, res) => {
  const { title, content, category, readTime, image } = req.body;

  try {
    // req.user is set by the authMiddleware
    const authorId = req.user._id;
    const authorName = req.user.username; // Get username from authenticated user

    const article = await Article.create({
      title,
      content,
      author: authorId,
      authorName,
      category,
      readTime,
      image,
    });

    res.status(201).json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get all articles
// @route   GET /api/articles
// @access  Public
const getArticles = async (req, res) => {
  try {
    const articles = await Article.find({}).sort({ createdAt: -1 }); // Sort by newest first
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get single article by ID
// @route   GET /api/articles/:id
// @access  Public
const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update an article
// @route   PUT /api/articles/:id
// @access  Private (requires token, only author can update)
const updateArticle = async (req, res) => {
  const { title, content, category, readTime, image } = req.body;

  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    // Check if the authenticated user is the author of the article
    if (article.author.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this article" });
    }

    article.title = title || article.title;
    article.content = content || article.content;
    article.category = category || article.category;
    article.readTime = readTime || article.readTime;
    article.image = image || article.image;
    article.updatedAt = Date.now();

    const updatedArticle = await article.save();
    res.json(updatedArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Delete an article
// @route   DELETE /api/articles/:id
// @access  Private (requires token, only author can delete)
const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    // Check if the authenticated user is the author of the article
    if (article.author.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this article" });
    }

    await article.deleteOne(); // Use deleteOne() instead of remove()
    res.json({ message: "Article removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export {
  createArticle,
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
};
