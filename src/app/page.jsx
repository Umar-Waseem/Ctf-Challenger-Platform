"use client";

import Sidebar from "../components/sidebar";
import HomeArea from "../components/homeArea";
import Navbar from "../components/navbar";


const HomePage = () => {
   return (
      <>
         <Navbar />
         <Sidebar />
         <HomeArea />
      </>
   );
};

export default HomePage;
