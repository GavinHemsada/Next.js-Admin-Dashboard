"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const router = useRouter();
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", password: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ name: "", email: "", password: "" });
    if (!validateForm()) return;

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      alert("User added successfully!");
      router.push("./Login");
      setName("");
      setEmail("");
      setPassword("");
      setErrors({ name: "", email: "", password: "" });
    } catch (error: any) {
      setErrors((prev) => ({...prev,email: "User with this email already exists."}));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
  <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign Up</h2>

    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Name Input */}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={validateForm}
        className={`px-4 py-2 border ${
          errors.name ? "border-red-500" : "border-gray-300"
        } rounded-lg focus:outline-none focus:ring-2 ${
          errors.name ? "focus:ring-red-400" : "focus:ring-blue-400"
        } w-full`}
      />
      {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}

      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={validateForm}
        className={`px-4 py-2 border ${
          errors.email ? "border-red-500" : "border-gray-300"
        } rounded-lg focus:outline-none focus:ring-2 ${
          errors.email ? "focus:ring-red-400" : "focus:ring-blue-400"
        } w-full`}
      />
      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={validateForm}
        className={`px-4 py-2 border ${
          errors.password ? "border-red-500" : "border-gray-300"
        } rounded-lg focus:outline-none focus:ring-2 ${
          errors.password ? "focus:ring-red-400" : "focus:ring-blue-400"
        } w-full`}
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add User
      </button>
    </form>

    <p className="text-center text-gray-600 mt-4">
      Already have an account?{" "}
      <Link href="./Login" className="text-blue-500 hover:underline">
        Log in
      </Link>
    </p>
  </div>
</div>

  );
}
export default SignUp;
