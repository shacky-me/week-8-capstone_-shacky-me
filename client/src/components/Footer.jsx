import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">shack'sNest</h3>
          <p className="text-sm leading-relaxed">
            Where every voice matters. Discover, create, and connect.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.532A8.318 8.318 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012 10.72v.055a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.844z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.007-.866-.012-1.705-2.782.603-3.369-1.34-3.369-1.34-.454-1.15-.111-1.463-.083-1.586.31-.215.023-.211.23-.146.21.016.447.213.684.654.22.38.618.332.767.227.02-.178.082-.332.166-.407-2.645-.298-5.43-1.32-5.43-5.932 0-1.31.465-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1-.322 3.301 1.23.959-.266 1.98-.399 3-.399.999 0 2.04.133 3 .399 2.301-1.552 3.301-1.23 3.301-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.621-2.786 5.629-5.437 5.922.424.363.811 1.096.811 2.219 0 1.604-.014 2.897-.014 3.291 0 .267.18.579.688.482C19.137 20.19 22 16.437 22 12.017 22 6.484 17.523 2 12 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/for-you"
                className="hover:text-white transition-colors duration-200"
              >
                For You
              </Link>
            </li>
            <li>
              <Link
                to="/following"
                className="hover:text-white transition-colors duration-200"
              >
                Following
              </Link>
            </li>
            <li>
              <Link
                to="/write"
                className="hover:text-white transition-colors duration-200"
              >
                Write
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className="hover:text-white transition-colors duration-200"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Legal & Support</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/privacy"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} shack'sNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
