 
import React from 'react'
 export default async function Explore() {    
 
  



  return (

   <div>
    <section  >
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16  ">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1623039405147-547794f92e9e?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Publishing Free Articles</h2>

        <p className="mt-4 text-gray-600">
          You can read articles here completly free to expand your knowledge about scientific breakthroughs and research 
          making it easier to share scientific articles no matter the result 
        </p>

        <a
          href="./Explore"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
            Start Reading
        </a>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
      You Can Post Articles And Share Your Work
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
          <p>
             You can Post ur articles and share it with the rest of us to read and learn
          </p>

          <p>
             When you Sign in u can Post articles and Your articles will be placed on the pending list until an editor reviews, edits, and publishes them. Please make sure to check your pending articles regularly to see if there are any updates or changes. If you have any questions or need further assistance, don't hesitate to contact our support team. We appreciate your patience and contributions to our platform.
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
<section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1510442650500-93217e634e4c?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
          Role Access and Assistance
          </h2>

          <p className="mt-4 text-gray-600">
          For those interested in gaining editor or admin access to our platform, please contact us directly. Our team will assist you in setting up the appropriate permissions and ensure you have everything you need to perform your duties effectively.

If you encounter any issues or have questions regarding your access, do not hesitate to reach out to our support team. We are here to help and ensure your experience with our platform is smooth and productive.
          </p>

          <a
            href="./About"
            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


 
    </div>
  );
}
