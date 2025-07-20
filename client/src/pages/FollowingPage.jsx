import { Link } from "react-router-dom";
import Button from "../components/Button";

const FollowingPage = () => {
  // Dummy data for articles from followed sources
  const followedArticles = [
    {
      id: 201,
      title: "The Evolution of Frontend Frameworks: A Historical Perspective",
      author: "Tech Historian",
      readTime: "9 min read",
      date: "Jul 19",
      image: "https://placehold.co/300x200/374151/ffffff?text=Frontend+History",
      snippet:
        "Trace the journey of web development from jQuery to modern React, Vue, and Angular.",
      category: "Web Development",
    },
    {
      id: 202,
      title: "Deep Learning Demystified: An Intuitive Introduction",
      author: "AI Explorer",
      readTime: "11 min read",
      date: "Jul 18",
      image: "https://placehold.co/300x200/4B5563/ffffff?text=Deep+Learning",
      snippet:
        "Understand the core concepts of neural networks and how they power today's intelligent systems.",
      category: "Artificial Intelligence",
    },
    {
      id: 203,
      title: "Mindfulness for Busy Professionals: Finding Calm in Chaos",
      author: "Wellness Coach",
      readTime: "7 min read",
      date: "Jul 17",
      image: "https://placehold.co/300x200/6B7280/ffffff?text=Mindful+Pro",
      snippet:
        "Practical strategies to integrate mindfulness into your demanding work schedule for reduced stress.",
      category: "Mental Health",
    },
    {
      id: 204,
      title: "Investing in Renewable Energy: A Guide for Beginners",
      author: "Green Investor",
      readTime: "10 min read",
      date: "Jul 16",
      image: "https://placehold.co/300x200/9CA3AF/ffffff?text=Renewable+Energy",
      snippet:
        "Discover how to make sustainable investments that contribute to a greener future and your portfolio.",
      category: "Sustainable Living",
    },
    {
      id: 205,
      title: "The Craft of Screenwriting: From Idea to Script",
      author: "Storyteller Pro",
      readTime: "14 min read",
      date: "Jul 15",
      image: "https://placehold.co/300x200/D1D5DB/ffffff?text=Screenwriting",
      snippet:
        "A comprehensive guide to developing compelling characters and plots for film and television.",
      category: "Creative Writing",
    },
  ];

  const followedTopics = [
    "React",
    "Node.js",
    "Cloud Computing",
    "Cybersecurity",
    "Data Science",
    "Blockchain",
    "Startups",
    "Personal Development",
  ];

  const followedWriters = [
    {
      name: "Emily Code",
      avatar: "https://placehold.co/40x40/C084FC/ffffff?text=EC",
      bio: "Full-stack developer & tech writer.",
    },
    {
      name: "John Finance",
      avatar: "https://placehold.co/40x40/F472B6/ffffff?text=JF",
      bio: "Financial analyst & investment strategist.",
    },
    {
      name: "Sarah Art",
      avatar: "https://placehold.co/40x40/22D3EE/ffffff?text=SA",
      bio: "Digital artist & creative director.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-inter antialiased">
      {/* Hero Section - Following Feed */}
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
            Your Following Feed
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Stay updated with the latest from the people and topics you follow.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Followed Articles Feed (Left/Main Column) */}
        <div className="lg:col-span-2 space-y-12">
          {followedArticles.map((article) => (
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
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-200">
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
            <Link to="/more-following">
              <Button variant="outline" size="medium">
                Load More from Your Following
              </Button>
            </Link>
          </div>
        </div>

        {/* Sidebar (Right Column) */}
        <div className="lg:col-span-1 space-y-12">
          {/* Followed Topics */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Followed Topics
            </h3>
            <div className="flex flex-wrap gap-3">
              {followedTopics.map((topic, index) => (
                <Link
                  to={`/topic/${topic.toLowerCase().replace(/\s/g, "-")}`}
                  key={index}
                >
                  <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-4 py-2 rounded-full hover:bg-green-200 transition-colors duration-200 cursor-pointer">
                    {topic}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Followed Writers */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Following</h3>
            <div className="space-y-6">
              {followedWriters.map((writer, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <img
                    src={writer.avatar}
                    alt={writer.name}
                    className="w-12 h-12 rounded-full flex-shrink-0"
                  />
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-900">
                      {writer.name}
                    </h4>
                    <p className="text-gray-500 text-sm mb-2">{writer.bio}</p>
                    <Button
                      variant="secondary"
                      size="small"
                      className="px-3 py-1 text-xs"
                    >
                      Unfollow
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowingPage;
