import React from "react";
import MenuCard from "@/app/restaurant/[slug]/components/MenuCard";

const Menu = () => (
  <main className="bg-white mt-5">
    <div>
      <div className="mt-4 pb-1 mb-1">
        <h1 className="font-bold text-4xl">Menu</h1>
      </div>
      <div className="flex flex-wrap justify-between">
        <MenuCard />
      </div>
    </div>
  </main>
);

export default Menu;
