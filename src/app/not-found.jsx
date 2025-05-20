import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";

const NotFound = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-20vh)] flex items-center justify-center bg-gray-50">
        <div className="text-center px-6 py-24">
          <h1 className="text-6xl md:text-9xl font-bold text-gray-900 mb-4">
            404
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Oops! Page not found
          </p>

          <div className="text-gray-500 max-w-lg mx-auto mb-8">
            <p>The page you're looking for doesn't exist or has been moved.</p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/"
              className="flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <FaHome className="mr-2" />
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
