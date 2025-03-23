"use client"; // Ensure it's a client component

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import connectToDatabase from "@/(backend)/utility/db"; // Ensure correct import path

export default function DashboardPage() {
  const router = useRouter(); // useRouter must be inside a function component

  useEffect(() => {
    async function init() {
      await connectToDatabase(); // Call the async function inside useEffect
      router.push("/admin/Login"); // Redirect after connection
    }

    init(); // Invoke the async function

  }, [router]); // Dependency array ensures this runs once

  return null; // No UI is needed
}
