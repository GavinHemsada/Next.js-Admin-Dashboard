"use client"; // Ensure it's a client component

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter(); // useRouter must be inside a function component

  useEffect(() => {
    async function init() {
      router.push("/admin/dashboard"); // Redirect after connection
    }

    init(); // Invoke the async function

  }, [router]); // Dependency array ensures this runs once

  return null; // No UI is needed
}
