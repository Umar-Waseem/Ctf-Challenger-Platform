"use client";

import Sidebar from "../components/sidebar";
import HomeArea from "../components/homeArea";

const HomePage = () => {
   return (
      <>
         <Sidebar sideBarItems={["Reverse Engineering", "Forensics", "Web Hacking", "OSINT", "Network Security"]} />
         <HomeArea />
      </>
   );
};

export default HomePage;
