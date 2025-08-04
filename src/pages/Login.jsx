import React from "react";
import { useForm } from "react-hook-form";
import { FaSignInAlt } from "react-icons/fa";
import { api } from "../config/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/api/users/login", data);
      // console.log("Login Success:", response.data);
      if (response) {
        toast.success("Login successful!");
        navigate("/")
        reset();
      }
console.log("token", response?.data?.token);
      localStorage.setItem("token", response?.data?.token);
    } catch (error) {
      // console.error("Login Error:", error.response || error);
      toast.error(error.response?.data?.error || "login failed");
    }
  };
  return (
    <div className=" w-full ">
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <div className=" ">
            <img src="/logo-pink.png" className=" w-12 h-12" alt="" />
            <h2 className="text-2xl font-bold ">Log In</h2>
            <h2 className="text-2xl mb-4 "> to your account</h2>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-500 mb-2">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 border placeholder:text-sm border-gray-50 rounded-lg shadow-md focus:outline-none focus:border-2 focus:border-gray-200"
              placeholder="Enter email..."
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-500 mb-4">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-2 border placeholder:text-sm border-gray-50 rounded-lg shadow-md focus:outline-none focus:border-2 focus:border-gray-200"
              placeholder="********"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 mt-4 rounded-lg hover:bg-pink-700 transition flex items-center gap-3 text-lg font-semibold cursor-pointer justify-center"
          >
            <FaSignInAlt size={"1.5rem"} />
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
