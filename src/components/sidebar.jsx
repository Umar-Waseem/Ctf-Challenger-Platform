

import SidebarItem from "./sidebarItem";

export default function Sidebar() {
    return (
        <aside
            id="logo-sidebar"
            class="w-full h-full pt-4 transition-transform -translate-x-full sm:translate-x-0 dark:bg-[#1B2137]"
            aria-label="Sidebar"
        >
            <div class="px-3 pb-4 overflow-y-auto bg-[#1B2137]">
                <ul class="h-full font-medium pt-2">

                    <SidebarItem title={"Reverse Engineering"} route={"/reverse-eng"} />
                    <SidebarItem title={"Web Hacking"} route={"/web-hacking"} />
                    <SidebarItem title={"Network Security"} route={"/web-hacking"} />
                    <SidebarItem title={"Cryptography"} route={"/web-hacking"} />
                    <SidebarItem title={"Digital Forensics"} route={"/web-hacking"} />
                    <SidebarItem title={"Boot To Root"} route={"/root"} />
                </ul>
            </div>
        </aside>
    );
}


