import React from 'react';

function Scoreboard() {
  const data = [
    { name: 'John', score: 100 },
    { name: 'Jane', score: 200 },
    { name: 'Mike', score: 150 },
    { name: 'Mike', score: 150 },
    { name: 'Mike', score: 150 },
    { name: 'Mike', score: 150 },
    { name: 'Mike', score: 150 },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4 text-yellow-400 py-10">Scoreboard</h1>
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
              {data.map((item, index) => (
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
                    {item.name}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.score}</td>
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
