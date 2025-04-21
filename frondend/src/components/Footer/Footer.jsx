import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-50 text-gray-700">
      <div className="bg-orange-500 text-white flex flex-col md:flex-row items-center justify-between  md:px-16 py-6">
        <h2 className="text-lg md:text-xl font-semibold">
          Ready to get started?
        </h2>
        <Link
          to="contactus"
          className="mt-3 md:mt-0 bg-white text-[#f25c05] font-semibold px-6 py-2 rounded-full hover:bg-orange-100 transition"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-16 py-10">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold text-2xl">AdVibe</span>
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank">
              <img
                src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
                alt="Facebook"
                className="w-12 h-12"
              />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img
                src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000"
                alt="Instagram"
                className="w-12 h-12"
              />
            </a>
            <a href="https://www.x.com" target="_blank">
              <img
                src="https://img.icons8.com/?size=100&id=ClbD5JTFM7FA&format=png&color=000000"
                alt="X"
                className="w-12 h-12"
              />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/contactus">Contact</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Team</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Designs</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/">Design contests</Link>
              </li>
              <li>
                <Link to="/">1-to-1 Projects</Link>
              </li>
              <li>
                <Link to="/">Find a designer</Link>
              </li>
              <li>
                <Link to="/">Discover inspiration</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">Become a designer</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Design without borders</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 py-4 border-orange-100">
        © All Rights Reserved By AdVibe 2025
      </div>
    </footer>
  );
};

export default Footer;
