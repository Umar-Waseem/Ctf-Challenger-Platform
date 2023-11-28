"use client";

import Sidebar from "../components/sidebar";
import HomeArea from "../components/homeArea";
import Navbar from "../components/navbar";


const HomePage = () => {
   return (
      <>
         <Navbar />
         <Sidebar sideBarItems={["Reverse Engineering", "Forensics", "Web Hacking", "OSINT", "Network Security"]} />
         <HomeArea />
      </>
   );
};

export default HomePage;
