import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        console.log("Email: ", email);
        console.log("Password: ", password);
        return NextResponse.json({ message: "User Logged In!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "An error occured while logging in!" }, { status: 500 });
    }
}