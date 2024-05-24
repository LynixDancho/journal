import { NextResponse } from "next/server";

import { clerkClient } from '@clerk/nextjs/server';

async function getUserList(){

    const response = await clerkClient.users.getUserList();
    return response

}
export async function GET(request) {
    const users = await getUserList();
    return NextResponse.json(users);
  }