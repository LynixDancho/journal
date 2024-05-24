import React from 'react'

function Hero() {
  return (
 

<section
  className="relative bg-[url(../public/Earf.jpg)]   rounded-b-xl bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl text-white font-extrabold sm:text-5xl">

Expand The Knowledge
        <strong className="block font-extrabold text-teal-600 "> Use NEWGATE  </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
      In the pages of scientific journals, knowledge becomes an ever-flowing stream, nourishing minds and fostering the spirit of discovery
      </p>

      <div className="mt-8 flex justify-center flex-wrap gap-4 text-center">
        <a
          href="/Main_Pages/Service"
          className="block w-full rounded bg-teal-600  px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700  focus:outline-none focus:ring active:bg-teal-500  sm:w-auto"
        > 
          Get Started
        </a>

        <a
          href="/Main_Pages/About"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
        >
           Contact Us
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero