"use client"

import React, { useEffect } from 'react';

function MoreChallenges() {

    const startDate = new Date('2023-01-01T00:00:00Z'); // Replace with your desired start date
    const endDate = new Date('2023-01-31T23:59:59Z');   // Replace with your desired end date

    const startTimestamp = Math.floor(startDate.getTime() / 1000);
    const endTimestamp = Math.floor(endDate.getTime() / 1000);
    const limit = 100;

    const [upcomingChallenges, setUpcomingChallenges] = React.useState([]);

    useEffect(() => {
        console.log('Upcoming challenges: component mounted');

        const fetchUpcomingChallenges = async () => {
            try {
                // Replace 'YOUR_CTF_TIME_API_URL' with the actual API endpoint for upcoming challenges
                URL = `https://ctftime.org/api/v1/events/?limit=${limit}&start=${startTimestamp}&finish=${endTimestamp}`;
                console.log('Upcoming challenges: URL', URL);
                const response = await fetch(URL);
                console.log('Upcoming challenges: response', response);

                const data = await response.json();

                console.log('Upcoming challenges:', data);

                // Assuming the API response has a structure like { upcoming: [...] }
                if (data && data.upcoming) {
                    setUpcomingChallenges(data.upcoming);
                }
            } catch (error) {
                console.error('Error fetching upcoming challenges:', error);
            }
        };

        fetchUpcomingChallenges();

        // Cleanup function (optional)
        return () => {
            console.log('MoreChallenges component unmounted');
        };
    }, []);


    return (
        <div className='w-full h-full px-4 sm:px-8 md:px-16 py-2 sm:py-4 md:py-8 bg-[#2D3250]'>
            \{upcomingChallenges.map((challenge, index) => (
                <div key={index} className='flex flex-col sm:flex-row justify-between items-center w-full h-full sm:h-20 bg-[#3D4466] rounded-lg px-4 sm:px-8 py-2 sm:py-4 mb-4'>
                    <div className='flex flex-col justify-center items-start'>
                        <h2 className='text-[#F2F2F2] text-lg font-bold'>{challenge.title}</h2>
                        <p className='text-[#F2F2F2] text-sm font-semibold'>{challenge.description}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-[#F2F2F2] text-sm font-semibold'>Starts</p>
                        <p className='text-[#F2F2F2] text-sm font-semibold'>{challenge.start}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-[#F2F2F2] text-sm font-semibold'>Ends</p>
                        <p className='text-[#F2F2F2] text-sm font-semibold'>{challenge.finish}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-[#F2F2F2] text-sm font-semibold'>Format</p>
                        <p className='text-[#F2F2F2] text-sm font-semibold'>{challenge.format}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-[#F2F2F2] text-sm font-semibold'>Location</p>
                        <p className='text-[#F2F2F2] text-sm font-semibold'>{challenge.location}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MoreChallenges