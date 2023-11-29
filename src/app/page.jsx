"use client";

import Sidebar from "../components/sidebar";
import HomeArea from "../components/homeArea";
import Navbar from "../components/navbar";



const HomePage = () => {
   return (
      <>
        
        <Navbar />         
         <div class="">
               <div class="flex">
                  <div class="sm:w-1/5">
                     <Sidebar />
                  </div>
                  <div class="sm:w-4/5">
                  <HomeArea />
                  </div>
               </div>
               
            </div>


      </>
   );
};

export default HomePage;
