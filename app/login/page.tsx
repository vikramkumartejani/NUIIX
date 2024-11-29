"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import { FiMail, FiLock } from "react-icons/fi";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="w-full flex items-center justify-center m-auto max-w-full h-screen bg-black p-4">
      <div className="bg-[#111827] rounded-3xl px-4 py-6 md:p-8 w-full max-w-[500px] mx-auto">
        <h1 className="text-white text-2xl font-semibold mb-8 text-center capitalize">
          Sign in to your account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-300 text-sm md:text-lg mb-3">
              Email
            </label>
            <div className="relative h-[40px] flex items-center">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className="w-full bg-[#1f2937] text-white rounded-lg pl-10 pr-4 py-3 md:py-3 focus:outline-none text-sm md:text-lg"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-gray-300 text-sm md:text-lg mb-3">
              Password
            </label>
            <div className="relative h-[40px] flex items-center">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                className="w-full bg-[#1f2937] text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none "
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setRememberMe(e.target.checked)
                }
                className="w-4 h-4 rounded border-gray-400 text-blue-500 focus:ring-blue-500 bg-[#1f2937]"
              />
              <span className="text-gray-300 text-sm md:text-lg">Remember me</span>
            </label>

            <button
              type="button"
              className="text-blue-500 text-sm md:text-lg hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg py-3 text-sm md:text-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Sign In
          </button>

          <p className="text-center text-gray-400 text-sm md:text-lg">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign-up here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
