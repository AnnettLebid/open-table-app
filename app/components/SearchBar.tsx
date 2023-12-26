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
        className="rounded text-lg mr-3 p-2 w-3/5 md:w-3/5"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="bg-red-600 p-4 md:px-9 py-2 text-white rounded"
        onClick={() => {
          if (location === "") {
            return;
          }
          router.push(`/search?city=${location}`);
          setLocation("");
        }}
      >
        Let's Go
      </button>
    </>
  );
};

export default SearchBar;
