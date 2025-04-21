import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold ">
            AdVibe
          </Link>

          <nav className="md:flex space-x-6 items-center">
            <Link
              to="/"
              className="text-md hover:text-orange-400 hover:shadow-orange-400 transition duration-300 flex items-center"
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="text-md hover:text-orange-400 hover:shadow-orange-400 transition duration-300 flex items-center"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-md hover:text-orange-400 hover:shadow-orange-400 transition duration-300 flex items-center"
            >
              Services
            </Link>
            <Link
              to="/contactus"
              className="text-md hover:text-orange-400 hover:shadow-orange-400 transition duration-300 flex items-center"
            >
              Content Us
            </Link>
            <Link
              to="/blog"
              className="text-md hover:text-orange-400 hover:shadow-orange-400 transition duration-300 flex items-center"
            >
              Blog
            </Link>
          </nav>
          <div className="md:block">
            <Link
              to="/signup"
              className="btn bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 font-bold border border-orange-400 rounded"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
