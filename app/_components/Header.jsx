'use client'
import React from 'react'
import Link from 'next/link'
 import { SignInButton } from "@clerk/nextjs";
 import {  currentUser } from '@clerk/nextjs/server'
 import { UserButton } from "@clerk/nextjs";
 import { useUser } from "@clerk/nextjs";

 function Header() {
  const { user } = useUser();
console.log('href', window.location.href)
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link  className="block text-teal-600 font-sans tracking-6 text-2xl font-medieum" href="/">
           NIBRAS  
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-gray-500 transition  hover:text-gray-500/75" href="/"> Home </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Explore </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About us </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {!user ? (
              <div className="sm:flex sm:gap-4">
                <a className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700" href="#">
                  <SignInButton></SignInButton>
                </a>
                <a className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-600/75 sm:block" href="#">
                  Register
                </a>
              </div>
            ) : (
              <div className='flex gap-3'>
                  <a className="hidden rounded-md mr-5 bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-600/75 sm:block" href="#">
                  Post Article
                </a>
                <UserButton afterSignOutUrl='/' />
              </div>
            )}

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;


 