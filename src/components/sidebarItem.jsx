import Link from "next/link";
import Image from "next/image";

export default function SidebarItem({ title, route }) {
    return (
        <li className="flex items-center px-2 py-4 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-yellow-400">
            <Link href={route} class="flex items-center w-full text-gray-900 ">
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://img.icons8.com/arcade/64/flag.png"
                    width={40}
                    className="pr-[8px]"
                />
                <p className="text-[16px] text-white hover:text-black hover:font-semibold">{title}</p>
            </Link>
        </li>
    );
}
