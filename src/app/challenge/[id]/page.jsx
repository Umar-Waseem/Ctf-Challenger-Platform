"use client"

import { useState } from 'react';

function ChallengePage({ params }) {
    // State to store the user's submission
    const [submission, setSubmission] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submitted:', submission);

        // Clear the submission field after handling
        setSubmission('');
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen text-white'>
            <h1 className='text-4xl font-bold mb-4'>Challenge {params.id}</h1>
            <p className='text-lg mb-6'>Challenge Description goes here...</p>

            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <label htmlFor='submission' className='mb-2'>
                    Your Submission:
                </label>
                <input
                    type='text'
                    id='submission'
                    value={submission}
                    onChange={(e) => setSubmission(e.target.value)}
                    className='border p-2 mb-4'
                />
                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
                    Submit
                </button>
            </form>

        </div>
    );
}

export default ChallengePage;
