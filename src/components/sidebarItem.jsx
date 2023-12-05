import Image from "next/image";

export default function SidebarItem({ title, onPress, category }) {
    return (
        <li className={`flex items-center px-2 py-4 transition duration-75 rounded-lg group hover:bg-yellow-400 ${title === category ? 'bg-yellow-400' : ''}`}>
            <button onClick={() => onPress(title)} class="flex items-center w-full text-gray-900 ">
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://img.icons8.com/arcade/64/flag.png"
                    width={40}
                    className="pr-[8px]"
                />
                <p className={`text-[16px] ${title === category ? "text-black hover:text-white font-semibold" : "text-white hover:text-black font-semibold"}`}>{title}</p>
            </button>
        </li>
    );
}
