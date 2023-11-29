
export default function EventCard({ title, organizer, position, date, description }) {
    return (
        <div className="lg:flex shadow rounded-lg border border-gray-400 mb-4">
            <div className="bg-green-600 rounded-lg lg:w-2/12 py-4 justify-center items-center flex">
                <div className="text-center tracking-wide">
                    <div className="text-white font-bold text-1xl">Standing</div>
                    <div className="text-white font-normal text-3xl">#{position}</div>
                </div>
            </div>
            <div className="w-full lg:w-11/12 xl:w-full px-1 bg-gray-800 text-white py-5 lg:px-2 lg:py-2 tracking-wide relative">
                <div className="flex flex-row lg:justify-start justify-center">
                    <div className="text-red-700 font-bold text-sm text-center lg:text-left px-2">
                        <i className="far fa-clock"></i> {date}
                    </div>
                    <div className="text-blue-400 font-medium text-sm text-center lg:text-left px-2">
                        Organiser: {organizer}
                    </div>
                </div>
                <div className="font-semibold text-xl text-center lg:text-left px-2">
                    {title}
                </div>
                <div className="text-gray-400 font-medium text-sm pt-1 text-center lg:text-left px-2">
                    {description}
                </div>
                {/* Add the "See Scoreboard" button */}
                {/* <div className="absolute right-0 p-2 lg:static lg:mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                        See Scoreboard
                    </button>
                </div> */}
            </div>
        </div>
    );
}
