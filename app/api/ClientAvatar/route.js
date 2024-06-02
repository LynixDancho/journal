import { NextResponse } from "next/server";
import { clerkClient } from '@clerk/nextjs/server';

export async function GET(request) {
  try {
    // Fetch the latest user list from Clerk backend
    const response = await clerkClient.users.getUserList();

    // Return the user list as JSON response with Cache-Control: no-store
    return NextResponse.json(response, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    // Handle errors if any
    console.error('Error fetching user list:', error);
    return NextResponse.error(new Error('Failed to fetch user list'));
  }
}
