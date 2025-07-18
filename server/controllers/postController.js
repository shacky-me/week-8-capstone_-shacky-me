import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      author: req.user,
    });

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username");
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "author",
      "username"
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: "Post not found" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (String(post.author) !== req.user)
      return res.status(401).json({ message: "Unauthorized" });

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (String(post.author) !== req.user)
      return res.status(401).json({ message: "Unauthorized" });

    await post.deleteOne();
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
