"use client"

import React from 'react';

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

function Scoreboard() {
  const [data, setData] = React.useState([]);

  const supabase = createClientComponentClient();

  React.useEffect(() => {
    const fetchScoreboard = async () => {
      try {
        const { data, error } = await supabase.from("users").select("*").order("total_score", { ascending: false })
        console.log("Get Scoreboard: (error):\n", error);
        console.log("Get Scoreboard: (data):\n", data);

        if (data) {
          setData(
            data.map((item) => ({
              id: item.id,
              name: item.user_name,
              score: item.total_score,
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchScoreboard();

    return () => {
      console.log("Component unmounted");
    };
  }, []);


  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4 text-yellow-400 py-10">Scoreboard</h1>
        <div className="relative overflow-x-auto w-3/4 mx-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-2 border-b border-gray-200">
                  Position
                </th>
                <th scope="col" className="px-4 py-2 border-b border-gray-200">
                  Name
                </th>
                <th scope="col" className="px-4 py-2 border-b border-gray-200">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? `bg-gray-50 dark:bg-gray-700`
                      : `bg-white dark:bg-gray-800`
                  }
                >
                  <td className="px-4 py-4 border-b border-gray-200 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</td>
                  <td className="px-4 py-4 border-b border-gray-200 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.name}
                  </td>
                  <td className="px-4 py-4 border-b border-gray-200 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Scoreboard;
