import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropDownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuthUser(null);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <div className="md:block" ref={dropDownRef}>
            {authUser ? (
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 bg-gray-200 p-1 rounded-full focus:outline-none"
                >
                  <div className="w-9 h-9 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    {authUser.firstName.charAt(0).toUpperCase()}
                  </div>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                    >
                      Messages
                    </Link>
                    <hr className="text-gray-200" />
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-orange-100 hover:cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/signup"
                className="btn bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 font-bold border border-orange-400 rounded"
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
