import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Login submitted:", formData);
    alert("Logged in successfully!");
  }

  const inputClasses =
    "w-full rounded-lg border border-nude-300 bg-nude-50 px-4 py-2.5 text-taupe-700 placeholder-taupe-400 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-blush-300 transition-colors duration-200";
  const labelClasses = "block text-sm font-medium text-taupe-600 mb-1.5";

  return (
    <div className="min-h-screen bg-nude-50 px-6 py-12 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm p-8">
        <h1 className="text-3xl font-semibold text-taupe-700 mb-8 text-center">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className={labelClasses}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={inputClasses}
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-blush-400 text-white rounded-full py-3 font-medium hover:bg-blush-500 transition-colors duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;