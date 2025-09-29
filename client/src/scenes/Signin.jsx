import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("accessToken"))

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      console.log(data);
      if (data.accessToken) {
        localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        alert("LOGIN SUCCESSFULLY")
        navigate("/" )
      } else {
        alert("server error")
      }
  }catch(error){
    console.log(error.message)
  }
  };

useEffect(()=>{
  if(token){
    navigate("/", {replace: true})
  }
})




  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome Back!
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm p-2"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm p-2"
            />
          </div>

        
          <button
            type="submit"
            className="w-full bg-rose-400 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-rose-600 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-rose-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
