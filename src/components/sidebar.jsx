import Link from "next/link";

import SidebarItem from "./sidebarItem";
import MultiSideBarItem from "./multiSideBarItem";

export default function Sidebar() {
    return (
        <aside
            id="logo-sidebar"
            class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar"
        >
            <div class="h-full px-3 pb-4 pt-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul class="space-y-3 font-medium">

                    <SidebarItem title="Home" icon="home" route="/" />

                    <MultiSideBarItem title="Challenges" icon="challenges" children={
                        [
                            <li>
                                <Link href="/challenges/current" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Current Challenges</Link>
                            </li>,
                            <li>
                                <Link href="/challenges/upcoming" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Upcoming Challenges</Link>
                            </li>,
                            <li>
                                <Link href="/challenges/past" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Past Challenges</Link>
                            </li>
                        ]
                    } />

                    <SidebarItem title="Signout" icon="signout" route="/signout" />

                </ul>
            </div>
        </aside>
    );
}


