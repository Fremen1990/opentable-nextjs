"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const router = useRouter();

  const [location, setLocation] = useState("");

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/*    NAVBAR*/}
        <nav className="bg-white p-2 flex justify-between">
          <Link href="/" className="font-bold text-gray-700 text-2xl">
            OpenTable
          </Link>
          <div>
            <div className="flex">
              <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
                Signin
              </button>
              <button className="border p-1 px-4 rounded">Signup</button>
            </div>
          </div>
        </nav>
        {/*    NAVBAR*/}
        <main>
          {/*  HEADER*/}
          <div className="h-64 bg-gradient-to-r from-blue-950 to-cyan-500 p-2">
            <div className="text-center mt-10">
              <h1 className="text-white text-5xl font-bold mb-2">
                Find your table for any occasion
              </h1>
              {/*  SEARCH BAR*/}
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
              {/*  SEARCH BAR*/}
            </div>
          </div>
          {/*  HEADER*/}

          {/*  CARDS*/}
          <div className="py-3 px-36 mt-10 flex flex-wrap">
            {/*  CARD*/}
            <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
              {/*<Link href="/restaurant/milestones-grill">*/}
              <img
                src="https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_40:9,c_thumb,w_1580/f_auto/q_auto/dpr_1.0/v1678910654/static-takeaway-com/images/generic/heroes/51/51_sushi_59"
                alt="Food"
                className="w-full h-36"
              />
              <div className="p-1">
                <h3 className="font-bold text-2xl mb-2">Cool Sushi</h3>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <p className="ml-2">77 reviews</p>
                </div>
                <div className="flex text-reg font-light capitalize">
                  <p className="mr-3">Mexican</p>
                  <p className="mr-3">$$$</p>
                  <p>Toronto</p>
                </div>
                <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
              </div>
              {/*</Link>*/}
            </div>
            {/*  CARD*/}
          </div>

          {/*  CARDS*/}
        </main>
      </main>
    </main>
  );
};

export default Home;
