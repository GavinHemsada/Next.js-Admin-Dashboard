"use client"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [serverError, setServerError] = useState("");
  const router = useRouter();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };
  
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    if (!validateForm()) return;
    try{
      const response = await fetch(`/api/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error( "Something went wrong.");
      }
      alert("sucessfull login");
      router.push("./dashboard");
      setPassword("");
      setEmail("");
    }catch(err){
      setServerError("Invalid Email or Password")
      console.log(err);
    }
   
  };
  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
  <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign in</h2>
    {serverError && <p className="text-red-500 text-center">{serverError}</p>}
    
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
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

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-md mt-4"
      >
        Sign In
      </button>

      <div className="mt-4 text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <Link href="./Register">
          <span className="text-blue-600 cursor-pointer hover:underline">
            Sign Up
          </span>
        </Link>
      </div>
    </form>
  </div>
</div>

  );
}
