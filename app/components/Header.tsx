"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="text-center mt-10">
        <h1 className="text-white text-5xl font-bold mb-2">
          Find your table for any occasion
        </h1>
        <div className="text-left text-lg py-3 m-auto flex justify-center">
          {/* SEARCH BAR */}
          <input
            type="text"
            className="rounded text-lg mr-3 p-2 w-[450px]"
            placeholder="State, city or town"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            className="bg-red-600 px-9 py-2 text-white rounded"
            onClick={() => {
              if (location === "banana") {
                return;
              }
              router.push("/search");
            }}
          >
            Let's Go
          </button>
          {/* SEARCH BAR */}
        </div>
      </div>
    </div>
  );
};

export default Header;
