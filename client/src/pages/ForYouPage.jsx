import { Link } from "react-router-dom";
import Button from "../components/Button"; // Assuming Button component is available

const ForYouPage = () => {
  // Dummy data for personalized articles
  const personalizedArticles = [
    {
      id: 101,
      title: "Mastering React Hooks: A Deep Dive into useState and useEffect",
      author: "Jane Developer",
      readTime: "8 min read",
      date: "Jul 18",
      image: "https://placehold.co/300x200/4F46E5/ffffff?text=React+Hooks",
      snippet:
        "Unlock the full potential of React development with a comprehensive guide to its most powerful hooks.",
      category: "Programming",
    },
    {
      id: 102,
      title: "The Future of Remote Work: Trends and Predictions for 2025",
      author: "Michael Business",
      readTime: "12 min read",
      date: "Jul 17",
      image: "https://placehold.co/300x200/EA580C/ffffff?text=Remote+Work",
      snippet:
        "Explore how technology and changing mindsets are reshaping the global workforce and remote collaboration.",
      category: "Work & Productivity",
    },
    {
      id: 103,
      title: "Healthy Eating on a Budget: Delicious Recipes for Every Day",
      author: "Chef Anna Green",
      readTime: "6 min read",
      date: "Jul 16",
      image: "https://placehold.co/300x200/16A34A/ffffff?text=Healthy+Food",
      snippet:
        "Nutritious meals don't have to break the bank. Discover simple, budget-friendly recipes.",
      category: "Health & Wellness",
    },
    {
      id: 104,
      title: "Introduction to Web3: Blockchain, NFTs, and Decentralization",
      author: "Crypto Enthusiast",
      readTime: "15 min read",
      date: "Jul 15",
      image: "https://placehold.co/300x200/0F766E/ffffff?text=Web3",
      snippet:
        "Demystify the concepts behind Web3 and understand its potential impact on the internet's future.",
      category: "Blockchain",
    },
    {
      id: 105,
      title: "The Power of Storytelling in Brand Building",
      author: "Marketing Guru",
      readTime: "9 min read",
      date: "Jul 14",
      image: "https://placehold.co/300x200/BE185D/ffffff?text=Storytelling",
      snippet:
        "Learn how compelling narratives can transform your brand's connection with its audience.",
      category: "Marketing",
    },
  ];

  const trendingTopics = [
    "Web Development",
    "Artificial Intelligence",
    "Mental Health",
    "Sustainable Living",
    "Personal Finance",
    "Travel Guides",
    "Productivity Hacks",
    "Creative Writing",
  ];

  const recommendedWriters = [
    {
      name: "David Tech",
      avatar: "https://placehold.co/40x40/C084FC/ffffff?text=DT",
      bio: "Software Engineer, AI enthusiast.",
    },
    {
      name: "Sophia Wellness",
      avatar: "https://placehold.co/40x40/F472B6/ffffff?text=SW",
      bio: "Holistic health coach.",
    },
    {
      name: "Mark Investor",
      avatar: "https://placehold.co/40x40/22D3EE/ffffff?text=MI",
      bio: "Financial advisor & author.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-inter antialiased">
      {/* Hero Section - Personalized Greeting */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
            Your Personalized Feed
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Stories tailored just for you, based on your interests and activity.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Personalized Articles Feed (Left/Main Column) */}
        <div className="lg:col-span-2 space-y-12">
          {personalizedArticles.map((article) => (
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
            <Link to="/more-for-you">
              <Button variant="outline" size="medium">
                Load More Personalized Stories
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
              Recommended Writers
            </h3>
            <div className="space-y-6">
              {recommendedWriters.map((writer, index) => (
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
                      Follow
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

export default ForYouPage;
