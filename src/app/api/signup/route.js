import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { username, email, password } = await req.json();
        console.log("Email: ", email);
        console.log("Username: ", username);
        console.log("Password: ", password);
        return NextResponse.json({ message: "User Registered" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "An error occured while registering!" }, { status: 500 });
    }
}