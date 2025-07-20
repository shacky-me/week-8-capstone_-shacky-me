// src/pages/WritePage.jsx
import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css"; // Import Quill's styles (snow theme)

const WritePage = () => {
  const [editorContent, setEditorContent] = useState(""); // State to hold the editor's content
  const [title, setTitle] = useState(""); // State for the article title

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

  // Define the formats that are allowed in the editor
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

  const handleSubmit = () => {
    console.log("Article Title:", title);
    console.log("Article Content (HTML):", editorContent);
    alert("Article submitted! (Check console for content)");
    setTitle("");
    setEditorContent("");
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 text-gray-800 min-h-screen">
      {" "}
      <div className="max-w-4xl mx-auto p-8 rounded-xl shadow-lg bg-white border border-gray-100">
        {" "}
        {/* Changed background to white, softer shadow, lighter border */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          {" "}
          {/* Changed text to dark gray */}
          Craft Your Story
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 text-center">
          {" "}
          {/* Changed text to medium gray */}
          Unleash your creativity and share your insights with the world.
        </p>
        {/* Title Input */}
        <div className="mb-6">
          <label
            htmlFor="article-title"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            {" "}
            {/* Changed label text to dark gray */}
            Article Title
          </label>
          <input
            id="article-title"
            type="text"
            placeholder="Your captivating title here..."
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-lg" // Changed input background to white, text to dark, border to light gray
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {/* ReactQuill Editor */}
        <div className="mb-8">
          <label
            htmlFor="article-content"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            {" "}
            {/* Changed label text to dark gray */}
            Article Content
          </label>
          <ReactQuill
            theme="snow"
            value={editorContent}
            onChange={setEditorContent}
            modules={modules}
            formats={formats}
            placeholder="Start writing your masterpiece..."
            className="bg-white rounded-lg text-gray-900 quill-custom-height-light" // Changed background to white, text to dark, and updated custom height class name
          />
        </div>
        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Publish Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritePage;
