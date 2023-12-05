

import SidebarItem from "./sidebarItem";

export default function Sidebar({ categoryChanger, category }) {
    return (
        <aside
            id="logo-sidebar"
            class="w-full h-full pt-4 transition-transform -translate-x-full sm:translate-x-0 dark:bg-[#1B2137]"
            aria-label="Sidebar"
        >
            <div class="px-3 pb-4 overflow-y-auto bg-[#1B2137]">
                <ul class="h-full font-medium pt-2">

                    <SidebarItem title={"Reverse Engineering"} onPress={categoryChanger} category={category} />
                    <SidebarItem title={"Web Hacking"} onPress={categoryChanger} category={category} />
                    <SidebarItem title={"Network Security"} onPress={categoryChanger} category={category} />
                    <SidebarItem title={"Cryptography"} onPress={categoryChanger} category={category} />
                    <SidebarItem title={"Digital Forensics"} onPress={categoryChanger} category={category} />
                    <SidebarItem title={"Boot To Root"} onPress={categoryChanger} category={category} />
                </ul>
            </div>
        </aside>
    );
}


