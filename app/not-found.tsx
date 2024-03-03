"use client";

import { useRouter } from "next/navigation";

useRouter;
const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg md:text-xl text-center mb-8">
        The page you are looking for does not exist.
      </p>
      <button
        onClick={() => router.push("/")}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:text-accent transition-colors focus:outline-none"
      >
        Go back to Home
      </button>
    </div>
  );
};

export default NotFound;
