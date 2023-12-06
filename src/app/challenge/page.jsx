"use client"

import { useState } from 'react';

import { useSearchParams } from 'next/navigation';

function ChallengePage({ params }) {

    const searchParams = useSearchParams()

    const id = searchParams.get('id')
    const desc = searchParams.get('desc')
    const flag = searchParams.get('flag')
    const title = searchParams.get('title')

    // State to store the user's submission
    const [submission, setSubmission] = useState('');

    // State to store the success modal visibility
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const [success, setSuccess] = useState(false);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submitted:', submission);

        // Check if submission is equal to flag
        if (submission === flag) {
            setSuccess(true);
        } else {
            setSuccess(false);
        }

        setShowSuccessModal(true);

        // Clear the submission field after handling
        setSubmission('');
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen text-white'>
            <h1 className='text-4xl font-bold mb-4'>{title}</h1>
            <p className='text-lg mb-6'>{desc}</p>

            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <label htmlFor='submission' className='mb-2'>
                    Your Submission:
                </label>
                <input
                    type='text'
                    id='submission'
                    value={submission}
                    onChange={(e) => setSubmission(e.target.value)}
                    className='border p-2 mb-4 text-black'
                />
                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
                    Submit
                </button>
            </form>

            {showSuccessModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-4 rounded'>
                        <h2 className={`text-2xl font-bold mb-2 ${success ? "text-green-500" : "text-red-500"}`}>{success ? "Success" : "No Success"}</h2>
                        <p className='text-black'>{success ? "Your submission was correct" : "Your submission is incorrect"}</p>
                        <button
                            className='bg-blue-500 text-white px-4 py-2 rounded mt-4'
                            onClick={() => setShowSuccessModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChallengePage;
