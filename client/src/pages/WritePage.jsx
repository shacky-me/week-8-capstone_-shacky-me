// src/pages/WritePage.jsx
import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const WritePage = () => {
  const [editorContent, setEditorContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State to hold error messages
  // Define the toolbar options for Quill
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const handleSubmit = async () => {
    if (!title.trim() || !editorContent.trim()) {
      setError("Please provide both a title and content for your story.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content: editorContent,
        }),
      });

      if (!response.ok) {
        // If the response is not OK (e.g., 400, 500 status code)
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to publish story.");
      }

      // If the request was successful
      const result = await response.json();
      console.log("Story published successfully:", result);
      alert("Article submitted successfully! 🎉");

      // Clear the form
      setTitle("");
      setEditorContent("");
    } catch (err) {
      console.error("Error publishing story:", err);
      setError(err.message || "An unexpected error occurred.");
      alert(`Error: ${err.message || "An unexpected error occurred."} 😢`);
    } finally {
      setLoading(false); // Set loading to false when submission finishes (whether success or error)
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 text-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto p-8 rounded-xl shadow-lg bg-white border border-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Craft Your Story
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 text-center">
          Unleash your creativity and share your insights with the world.
        </p>
        {/* Title Input */}
        <div className="mb-6">
          <label
            htmlFor="article-title"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Article Title
          </label>
          <input
            id="article-title"
            type="text"
            placeholder="Your captivating title here..."
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={loading} // Disable input while loading
          />
        </div>
        {/* ReactQuill Editor */}
        <div className="mb-8">
          <label
            htmlFor="article-content"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Article Content
          </label>
          <ReactQuill
            theme="snow"
            value={editorContent}
            onChange={setEditorContent}
            modules={modules}
            formats={formats}
            placeholder="Start writing your masterpiece..."
            className="bg-white rounded-lg text-gray-900 quill-custom-height-light"
            readOnly={loading} // Disable editor while loading
          />
        </div>
        {/* Error Message */}
        {error && (
          <div className="mb-4 text-red-600 text-center font-medium">
            {error}
          </div>
        )}
        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Publishing..." : "Publish Story"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritePage;
