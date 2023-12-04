"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import AuthError from "../../components/authError";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Login() {
    const supabase = createClientComponentClient();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        setError("");
        e.preventDefault();

        if (!email || !password) {
            setError("Please fill out all fields");
            return;
        }

        setLoading(true); // Set loading state to true

        try {
            const { user, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            console.log(user, error);

            if (error) {
                setError(error.message);
            } else {
                window.location.href = "/";
            }
        } catch (error) {
            console.error("Error signing in:", error.message);
            setError("Error signing in. Please try again.");
        } finally {
            setLoading(false); // Set loading state back to false
        }
    };

    return (
        <div className="flex">
            <section className="bg-gray-50 dark:bg-gray-900 flex-1">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
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
                                    {loading ? 'Signing in...' : 'Sign in'}
                                </button>

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don't have an account yet?{" "}
                                    <Link
                                        href="/signup"
                                        className="font-medium hover:underline dark:text-white"
                                    >
                                        Sign up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex-1 flex">
                <div className="bg-gray-300 dark:bg-gray-700">
                    <Image
                        src="https://i.guim.co.uk/img/media/33d0d9b03f5139ed835da866e5e9d074863da971/0_0_1919_1152/master/1919.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=f0a5f017a64f6035d297473d7d491fa1"
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
