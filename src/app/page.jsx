"use client";

import Sidebar from "../components/sidebar";
import HomeArea from "../components/homeArea";
import Navbar from "../components/navbar";

import { useState } from "react";

const HomePage = () => {

   const [selectedCategory, setSelectedCategory] = useState("");

   const handleCategoryChange = (category) => {
      console.log("Category Changed: ", category);
      setSelectedCategory(category);
   }

   return (
      <>
         <Navbar profileImage={"user.svg"} />
         <div class="flex">
            <div class="sm:w-1/5">
               <Sidebar categoryChanger={handleCategoryChange} category={selectedCategory} />
            </div>
            <div class="sm:w-4/5">
               <HomeArea selectedCategory={selectedCategory} />
            </div>
         </div>
      </>
   );
};

export default HomePage;
