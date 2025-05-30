"use client";
import { useEffect, useState } from "react";

export default function AdminHeader({ onLogout }: { onLogout: () => void }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const adminName = localStorage.getItem("adminName");
      const caissierName = localStorage.getItem("caissierName");
      setUserName(adminName || caissierName || "");
    }
  }, []);

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold">Motel du Coin</span>
          <span className="ml-4 bg-primary text-black px-3 py-1 rounded-md text-sm font-semibold">
            {userName ? userName : "Administration"}
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={onLogout}
                className="text-white hover:text-yellow-200 transition"
              >
                Déconnexion
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
