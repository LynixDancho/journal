'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useDebounce } from 'use-debounce'

function SearchFunction({getSearchResults}) {
    const router = useRouter()
    const [text, setText] = useState('')
    const [debouncedText] = useDebounce(text, 300)
     useEffect(() => {
        if (!debouncedText) {
            router.push(`/Main_Pages/Explore`)
        } else {
            router.push(`/Main_Pages/Explore?search=${debouncedText}`)
        }
    }, [debouncedText, router])

    const handleSubmit = async (e) => {
        e.preventDefault()
          // Check if the text is empty
  if (text.trim() === '') {
    // If empty, do nothing or show a message to the user
    return;
  }

        const response = await fetch(`/api/SSearch?query=${text}`)
        const article = await response.json()
        console.log(article)
        getSearchResults(article)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='border-0 relative flex rounded-md shadow-sm'>
                <input
                    onChange={e => setText(e.target.value)}
                    value={text}
                    placeholder='Search articles...'
                    className='block w-[400px] py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                />
                <button
                    type='submit'
                    className='h-12 w-10 border bg-gray-400 text-gray-400 cursor-pointer'
                >
                    <MagnifyingGlassIcon
                        className='h-5 w-5 ml-2 text-black'
                        aria-hidden='true'
                    />
                </button>
            </div>
        </form>
    )
}

export default SearchFunction
