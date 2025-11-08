import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white px-6 py-3">
      <h1 className="text-xl font-bold">Roomease</h1>
      <div className="flex items-center gap-4">
        {user && <img src={user.avatar} className="w-8 h-8 rounded-full" />}
        {user && <span>{user.name}</span>}
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}