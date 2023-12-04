"use client"

import React from 'react'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

function Users() {

    const supabase = createClientComponentClient();

    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        console.log("DB Request");

        const fetchUsers = async (category) => {
            try {
                const { data, error } = await supabase.from("users").select("*")
                // .eq("category", category);
                console.log("Get Users: (error):\n", error);
                console.log("Get Users: (data):\n", data);

                if (data) {
                    setUsers(
                        data.map((item) => ({
                            id: item.id,
                            user_name: item.username,
                            user_email: item.email,
                            ctfs_played: item.ctfs_played,
                        }))
                    );
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchUsers();

        return () => {
            // Cleanup function
            // Perform any necessary cleanup here
            // For example, cancel any pending requests or subscriptions
            // This function will be called when the component unmounts
            console.log("Component unmounted");
        };
    }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold mb-4 text-yellow-400 py-10">Users</h1>
                <div className="relative overflow-x-auto w-full">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 border-b border-gray-200">
                                    Position
                                </th>
                                <th scope="col" className="px-6 py-3 border-b border-gray-200">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 border-b border-gray-200">
                                    Score
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                <tr
                                    key={index}
                                    className={
                                        index % 2 === 0
                                            ? `bg-gray-50 dark:bg-gray-700`
                                            : `bg-white dark:bg-gray-800`
                                    }
                                >
                                    <td className="px-6 py-4 border-b border-gray-200 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.user_name}
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.user_email}
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.ctfs_played}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Users