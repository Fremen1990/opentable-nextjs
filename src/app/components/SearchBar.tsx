"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();

  const [location, setLocation] = useState("");
  return (
    <div className="overflow-hidden text-left py-3 m-auto flex justify-center">
      <input
        type="text"
        placeholder="Wojewodztow, miasto, ulica"
        className="rounded text-lg mr-3 p-2 w-[450px] bg-white"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="bg-red-600 px-9 py-2 text-white"
        onClick={() => {
          if (location === "banana") return;
          return router.push("/search");
        }}
      >
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Let's go
      </button>
    </div>
  );
};

export default SearchBar;
