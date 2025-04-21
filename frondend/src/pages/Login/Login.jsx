import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      <Link to="/" className="absolute top-4 right-4">
        <img
          src="https://img.icons8.com/?size=100&id=3062&format=png&color=000000"
          alt="Cancel"
          className="h-8 w-8"
        />
      </Link>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <h2 className="text-2xl font-bold text-center mb-5">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-left pb-5">
            <Link to="/signup" className="text-sm text-red-500 hover:underline">
              Don't have an account?
            </Link>
          </div>
          <div className="flex justify-center">
            <button
              type="submite"
              className="btn w-full bg-orange-500 text-white py-2 hover:bg-orange-600 transition duration-300 rounded-2xl"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
