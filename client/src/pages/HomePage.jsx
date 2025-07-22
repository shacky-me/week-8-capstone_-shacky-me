// src/pages/HomePage.jsx
import { Link } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/articles")
  //     .then((res) => {
  //       setArticles(res.data);
  //     })
  //     .catch((err) => console.error("Fetch error:", err));
  // }, []);
  // Dummy data for articles and topics
  const featuredArticle = {
    id: 1,
    title: "The Art of Mindful Living in a Digital Age",
    author: "Eleanor Vance",
    readTime: "7 min read",
    date: "Jul 15",
    image: "https://placehold.co/600x400/8B5CF6/ffffff?text=Featured+Article",
    snippet:
      "In an increasingly connected world, finding moments of calm and presence can transform your daily life. Explore practical tips for digital detox and mindful practices.",
    category: "Mindfulness",
  };

  const articles = [
    {
      id: 2,
      title: "Decoding the Future of AI: Beyond the Hype",
      author: "Dr. Alex Chen",
      readTime: "10 min read",
      date: "Jul 14",
      image: "https://placehold.co/300x200/6366F1/ffffff?text=AI+Future",
      snippet:
        "Artificial intelligence is rapidly evolving. This deep dive explores the real potential and ethical considerations shaping its trajectory.",
      category: "Technology",
    },
    {
      id: 3,
      title: "The Subtle Power of Habit Stacking",
      author: "Maria Rodriguez",
      readTime: "5 min read",
      date: "Jul 13",
      image: "https://placehold.co/300x200/EC4899/ffffff?text=Habits",
      snippet:
        "Small changes lead to big results. Learn how to effortlessly build new routines by leveraging existing habits.",
      category: "Self-Improvement",
    },
    {
      id: 4,
      title: "Exploring the Hidden Gems of Southeast Asian Cuisine",
      author: "Chef Leo Kim",
      readTime: "8 min read",
      date: "Jul 12",
      image: "https://placehold.co/300x200/10B981/ffffff?text=Cuisine",
      snippet:
        "A culinary journey through the vibrant flavors and unique traditions of Southeast Asia's diverse kitchens.",
      category: "Food & Travel",
    },
    {
      id: 5,
      title: "The Renaissance of Vinyl: Why Analog is Back",
      author: "Sophie Miller",
      readTime: "6 min read",
      date: "Jul 11",
      image: "https://placehold.co/300x200/F59E0B/ffffff?text=Vinyl",
      snippet:
        "In a digital age, the tactile experience of vinyl records is making a surprising comeback. Discover why.",
      category: "Culture",
    },
    {
      id: 6,
      title: "Understanding Quantum Computing: A Beginner's Guide",
      author: "Dr. Ethan Reed",
      readTime: "12 min read",
      date: "Jul 10",
      image: "https://placehold.co/300x200/3B82F6/ffffff?text=Quantum+Comp",
      snippet:
        "Demystifying the complex world of quantum computing and its potential to revolutionize technology.",
      category: "Technology",
    },
  ];

  const trendingTopics = [
    "Artificial Intelligence",
    "Mindfulness",
    "Productivity",
    "Future of Work",
    "Sustainable Living",
    "Space Exploration",
    "Digital Art",
    "Personal Finance",
  ];

  const recommendedWriters = [
    {
      name: "Alice Johnson",
      avatar: "https://placehold.co/40x40/a78bfa/ffffff?text=AJ",
    },
    {
      name: "Bob Williams",
      avatar: "https://placehold.co/40x40/6366F1/ffffff?text=BW",
    },
    {
      name: "Charlie Brown",
      avatar: "https://placehold.co/40x40/EC4899/ffffff?text=CB",
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-inter antialiased">
      {/* Hero Section - Featured Article */}
      <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Featured Story
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
              {featuredArticle.title}
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
              {featuredArticle.snippet}
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-600 text-sm">
              <img
                src="https://placehold.co/32x32/9CA3AF/ffffff?text=EV"
                alt={featuredArticle.author}
                className="w-8 h-8 rounded-full"
              />
              <span>{featuredArticle.author}</span>
              <span>&bull;</span>
              <span>{featuredArticle.readTime}</span>
              <span>&bull;</span>
              <span>{featuredArticle.date}</span>
            </div>
            <Link
              to={`/article/${featuredArticle.id}`}
              className="mt-8 inline-block"
            >
              <Button variant="primary" size="medium">
                Read Full Story
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="rounded-xl shadow-xl w-full max-w-md md:max-w-none h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Articles Feed (Left/Main Column) */}
        <div className="lg:col-span-2 space-y-12">
          {articles.map((article) => (
            <Link
              to={`/article/${article.id}`}
              key={article.id}
              className="block group"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                <div className="flex-grow">
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
                    {article.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-3 line-clamp-2">
                    {article.snippet}
                  </p>
                  <div className="flex items-center space-x-3 text-gray-500 text-sm">
                    <img
                      src={`https://placehold.co/24x24/9CA3AF/ffffff?text=${article.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}`}
                      alt={article.author}
                      className="w-6 h-6 rounded-full"
                    />
                    <span>{article.author}</span>
                    <span>&bull;</span>
                    <span>{article.readTime}</span>
                    <span>&bull;</span>
                    <span>{article.date}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 w-full sm:w-40 md:w-48 h-auto sm:h-28 md:h-32 rounded-lg overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </Link>
          ))}
          <div className="text-center mt-12">
            <Link to="/all-stories">
              <Button variant="outline" size="medium">
                Load More Stories
              </Button>
            </Link>
          </div>
        </div>

        {/* Sidebar (Right Column) */}
        <div className="lg:col-span-1 space-y-12">
          {/* Trending Topics */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Trending Topics
            </h3>
            <div className="flex flex-wrap gap-3">
              {trendingTopics.map((topic, index) => (
                <Link
                  to={`/topic/${topic.toLowerCase().replace(/\s/g, "-")}`}
                  key={index}
                >
                  <span className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-4 py-2 rounded-full hover:bg-purple-200 transition-colors duration-200 cursor-pointer">
                    {topic}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Recommended Writers */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Who to follow
            </h3>
            <div className="space-y-4">
              {recommendedWriters.map((writer, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={writer.avatar}
                      alt={writer.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {writer.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        @{writer.name.toLowerCase().replace(/\s/g, "")}
                      </p>
                    </div>
                  </div>
                  <Button variant="secondary" size="small">
                    Follow
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
