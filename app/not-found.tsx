"use client";

import React from "react";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 animate-fadeIn">
      <h1 className="text-6xl font-bold text-gray-800">Oops!</h1>
      <p className="text-xl text-gray-600 mt-4">
        We can't seem to find the page you're looking for.
      </p>
      <p>This Page might still be in development. Please bear with us</p>
      <p className="text-blue-500 mt-4 cursor-pointer" onClick={handleGoBack}>
        Go back home
      </p>
    </div>
  );
};

export default NotFoundPage;
