"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <>
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
    </>
  );
};

export default SearchBar;
