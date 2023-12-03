import Link from "next/link";
import { Image } from "@nextui-org/react";

// import SidebarItem from "./sidebarItem";
// import MultiSideBarItem from "./multiSideBarItem";

export default function Sidebar() {
    return (
        <aside
            id="logo-sidebar"
            class="w-full h-full pt-4 transition-transform -translate-x-full sm:translate-x-0 dark:bg-[#1B2137]"
            aria-label="Sidebar"
        >
            <div class="px-3 pb-4 overflow-y-auto bg-[#1B2137]">
                <h1 className="tracking-wider font-semibold pl-2 text-yellow-400 text-[20px] flex mb-4">Competitions</h1>
                <ul class="h-full font-medium pt-2">


                    <li className="flex items-center px-2 py-4 transition duration-75 rounded-lg group hover:bg-yellow-400 dark:text-white dark:hover:bg-yellow-400">
                        <Link href="#" class="flex items-center w-full text-gray-900 transition duration-75 rounded-lg group">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://img.icons8.com/arcade/64/flag.png"
                                width={40}
                                className="pr-[8px]"
                            />
                            <p className="text-[12px] text-white hover:text-black hover:font-semibold">Digital Cyber Pakistan<br /><span className="text-xs pt-[4px] text-gray-400 line-clamp-1 hover:text-gray-500">This is platform where you solve ctf's</span></p>
                        </Link>
                    </li>,
                    <li className="flex items-center px-2 py-4 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-yellow-400">
                        <Link href="#" class="flex items-center w-full text-gray-900 ">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://img.icons8.com/arcade/64/flag.png"
                                width={40}
                                className="pr-[8px]"
                            />                                <p className="text-[12px] text-white hover:text-black hover:font-semibold">Digital Cyber Pakistan<br /><span className="text-xs pt-[4px] text-gray-400 line-clamp-1  hover:text-gray-500">This is platform where you solve ctf's</span></p>
                        </Link>
                    </li>,


                    {/* <SidebarItem title="Sign Out" icon="signout" route="/signout" /> */}

                </ul>
            </div>
        </aside>
    );
}


