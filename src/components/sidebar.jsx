import Link from "next/link";

import SidebarItem from "./sidebarItem";
import MultiSideBarItem from "./multiSideBarItem";

export default function Sidebar() {
    return (
        <aside
            id="logo-sidebar"
            class="w-full h-screen pt-4 transition-transform -translate-x-full sm:translate-x-0 dark:bg-[#1B2137]"
            aria-label="Sidebar"
        >
            <div class="px-3 pb-4 overflow-y-auto bg-[#1B2137]">
                <h1 className="tracking-wider font-light pl-2 text-yellow-400 text-[12px] flex">Challenges</h1>
                <ul class="h-full font-medium pt-2">

                    {/* <SidebarItem title="Home" icon="home" route="/" /> */}

                    {/* <MultiSideBarItem title="Challenges" icon="challenges" children={
                        [ */}
                    <li className="flex items-center px-2 py-4 transition duration-75 rounded-lg group hover:bg-yellow-400 dark:text-white dark:hover:bg-yellow-400">
                        <Link href="/challenges/current" class="flex items-center w-full text-gray-900 transition duration-75 rounded-lg group">
                        <img width="40" height="40" className="pr-[8px]" src="https://img.icons8.com/pastel-glyph/64/000000/box--v3.png" alt="box--v3" />
                            <p className="text-sm text-white">Digital Cyber Pakistan<br/><span className="text-xs pt-[4px] text-gray-400 line-clamp-1">This is platform where you solve ctf's</span></p>
                        </Link>
                    </li>,
                    <li className="flex items-center px-2 py-4 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-yellow-400">
                        <Link href="/challenges/current" class="flex items-center w-full text-gray-900 ">
                        <img width="40" height="40" className="pr-[8px]" src="https://img.icons8.com/pastel-glyph/64/000000/box--v3.png" alt="box--v3" />
                            <p className="text-sm text-white">Digital Cyber Pakistan<br/><span className="text-xs pt-[4px] text-gray-400 line-clamp-1">This is platform where you solve ctf's</span></p>
                        </Link>
                    </li>,
                    {/* ]
                    } /> */}

                    {/* <SidebarItem title="Sign Out" icon="signout" route="/signout" /> */}

                </ul>
            </div>
        </aside>
    );
}


