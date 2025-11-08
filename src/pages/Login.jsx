
import React from "react";

export default function Login() {
  const handleGoogleLogin = () => {
    window.location.href =  "https://google-auth-backend-vaei.onrender.com/auth/google";;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login to Roomease</h1>
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Sign in with Google
      </button>
    </div>
  );
}

