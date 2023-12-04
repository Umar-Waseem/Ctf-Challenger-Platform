"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import AuthError from "../../components/authError";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function SignUp() {
    const supabase = createClientComponentClient();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setName] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        setError("");
        e.preventDefault();

        if (!email || !password || !username) {
            setError("Please fill out all fields");
            return;
        }

        setLoading(true); // Set loading state to true

        try {
            const { user, error } = await supabase.auth.signUp({
                email,
                password,
            });

            console.log(user, error);

            if (error) {
                setError(error.message);
            } else {
                // save user to users table
                const { error } = await supabase.from("users").insert(
                    { user_name: username, user_email: email, password: password, ctfs_played: 0, total_score: 0 },
                );
                console.log("User created successfully");

                console.error("Insert User: (error):\n", error);

                // redirect to home page

                window.location.href = "/";
            }
        } catch (error) {
            console.error("Error signing up:", error.message);
            setError("Error signing up. Please try again.");
        } finally {
            setLoading(false); // Set loading state back to false
        }
    };

    return (
        <div className="flex">
            <section className="flex-1">

                <div className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Register For An Account
                                </h1>
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label
                                            htmlFor="username"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Your username
                                        </label>
                                        <input
                                            onChange={(e) => setName(e.target.value)}
                                            type="text"
                                            name="username"
                                            id="username"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Umar Waseem"
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Your email
                                        </label>
                                        <input
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name@company.com"
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Password
                                        </label>
                                        <input
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required=""
                                        />
                                    </div>

                                    <AuthError error={error} />

                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        className={`w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                            }`}
                                        disabled={loading}
                                    >
                                        {loading ? 'Signing up...' : 'Register'}
                                    </button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account?{" "}
                                        <Link
                                            href="/login"
                                            className="font-medium hover:underline dark:text-white"
                                        >
                                            Login
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            <section className="flex-1 flex">
                <div className="bg-gray-300 dark:bg-gray-700">
                    {/* Adjust the following styling based on your needs */}
                    <Image
                        src="https://t4.ftcdn.net/jpg/01/98/83/09/360_F_198830916_gFI9RYVWj7iHiJgmb83j7xVtbNWLpcsL.jpg"
                        alt="illustration image"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                    />
                </div>
            </section>



        </div>
    );
}
