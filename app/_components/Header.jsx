'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { UserButton, useUser, useClerk } from '@clerk/nextjs';

function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const [isEditor, setIsEditor] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isReviewer, setIsReviewer] = useState(false)

  useEffect(() => {
    if (isLoaded && typeof isSignedIn !== 'undefined' && isSignedIn && user) {
      fetch(`http://localhost:1337/api/users?filters[email][$eq]=${user.primaryEmailAddress.emailAddress}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch users');
          }
          return response.json();
        })
        .then(data => {
          const fetchedUser = data[0];
          if (fetchedUser) {
            setIsEditor(fetchedUser.IsEditor);
            setIsReviewer(fetchedUser.isReviewer);
          }
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [isLoaded, isSignedIn, user]);
    console.log(isSignedIn)


  const signOutAndReload = () => {
    signOut().then(() => {
      window.location.reload();
    });
  };

  if (isLoading) {
    return (
      <div>
        <header className="bg-white">
          {/* Render loading state */}
        </header>
      </div>
    );
  }

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600 font-sans tracking-6 text-2xl font-medium" href="/">
          NewGate
        </Link>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center list-none gap-6 text-sm">
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="/">Home</a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="/Main_Pages/Explore/">Explore</a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="/Main_Pages/Service">Services</a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="/Main_Pages/About/">About us</a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center  ">
            {isSignedIn ? (
              <>
            
                <div className="sm:flex sm:gap-2"></div>
                <Link href="/PostArticle" className="hidden rounded-md mr-5 bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-600/75 sm:block">
                  Post Article
                </Link>
                <Link href="/ISSent" className="hidden rounded-md mr-5 bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-600/75 sm:block">
                  Articles Pending
                </Link>
                {isEditor && (
                  <> 
                  <Link href="/Assign-Articles" className="hidden rounded-md mr-5 bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-600/75 sm:block">
                    Assign Reviewer
                  </Link>
                  <Link href="/Articles-ToEdit" className="hidden rounded-md mr-5 bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-600/75 sm:block">
                   Approve Articles   
                </Link>
                 </>
                )}
                  {isReviewer && (
                  <Link href="/Articles-ToReview" className="hidden rounded-md mr-5 bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-600/75 sm:block">
                    Check  Articles
                  </Link>
                )}
                <UserButton afterSignOutUrl="#" signOut={signOutAndReload} />
           
              </>
            ) : (
              <div className="sm:flex sm:gap-4">
                <a className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700" href="/sign-in">
                  Sign in 
                </a>
                <a className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-600/75 sm:block" href="/sign-up">
                  Sign up
                </a>
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
