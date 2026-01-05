import { useEffect, useState } from "react";
import { Mail, Lock, Loader2, AlertCircle } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, errorMessage, data, submit } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(email, password);
  };

  useEffect(() => {
    if (data) navigate(`/${data.email}`);
    else return;
  }, [data, navigate]);

  return (
    <div className="flex justify-center items-center bg-gray-100 px-4 min-h-screen">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md px-8 pt-6 pb-8 rounded-lg"
        >
          <h2 className="mb-6 font-bold text-gray-800 text-2xl text-center">
            Login
          </h2>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-gray-700 text-sm"
            >
              Email address
            </label>
            <div className="relative">
              <Mail className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2 transform" />
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                disabled={isLoading}
                onChange={(e) => setEmail(e.target.value)}
                className="disabled:bg-gray-100 py-2 pr-3 pl-10 border border-gray-300 focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 font-semibold text-gray-700 text-sm"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2 transform" />
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                disabled={isLoading}
                onChange={(e) => setPassword(e.target.value)}
                className="disabled:bg-gray-100 py-2 pr-3 pl-10 border border-gray-300 focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 px-4 py-2 rounded-md w-full font-semibold text-white transition duration-200 cursor-pointer disabled:cursor-not-allowed"
          >
            {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
            {isLoading ? "Loading..." : "Submit"}
          </button>

          {errorMessage && (
            <>
              <hr className="my-4 border-gray-300" />
              <div className="flex items-center gap-2 bg-red-50 p-3 rounded-md text-red-600 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p>{errorMessage}</p>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
