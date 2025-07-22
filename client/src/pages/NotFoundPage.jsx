import { Link } from "react-router-dom";
import Button from "../components/Button"; // Assuming Button component is available

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 font-inter antialiased px-4 py-12">
      <div className="text-center max-w-2xl mx-auto p-8 rounded-xl shadow-lg bg-white border border-gray-100">
        <h1 className="text-9xl font-extrabold text-purple-600 mb-4 animate-bounce-slow">
          404
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          Oops! It looks like you've ventured into uncharted territory. The page
          you're looking for might have been moved, deleted, or never existed.
        </p>
        <Link to="/home">
          <Button
            variant="primary"
            size="large"
            className="shadow-md hover:shadow-lg"
          >
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
