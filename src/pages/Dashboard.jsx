import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    axios
      .get("http://localhost:5000/api/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUserData(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
      {userData ? (
        <div>
          <img src={userData.avatar} alt="avatar" className="w-16 rounded-full" />
          <h2>{userData.name}</h2>
          <p>{userData.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Logout
      </button>
    </div>
  );
}
