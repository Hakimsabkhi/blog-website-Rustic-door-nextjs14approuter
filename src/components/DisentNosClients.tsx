import React from 'react';

function DisentNosClients() {
  return (
    <section className='flex flex-col lg:flex-row gap-8 px-4 centred'>
      <div className='flex flex-col w-full lg:w-1/2 justify-center gap-2'>
        <h1 className='text-blue-400 font-mono'>TEMOIGNAGES</h1>
        <h2 className='text-orange-400 font-bold text-4xl'>REGARDEZ CE QUE DISENT NOS CLIENTS !</h2>
        <p>Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.</p>
        <div className="flex gap-4 ">
          <a
            className="inline-block rounded-full border border-sky-500 p-3 text-sky-500 hover:bg-sky-500 hover:text-white focus:outline-none focus:ring active:bg-sky-500"
            href="#"
          >
            <span className="sr-only">Next A Gauche</span>
            <svg
              className="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </a>
          <a
            className="inline-block rounded-full border border-sky-500 p-3 text-sky-500 hover:bg-sky-500 hover:text-white focus:outline-none focus:ring active:bg-sky-500"
            href="#"
          >
            <span className="sr-only">Next A Droite</span>
            <svg
              className="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className='flex justify-center w-full lg:w-1/2  '>
        <blockquote className="rounded-xl  bg-white p-6 shadow-xl sm:p-8 ">
          <img src="/img/PNG/deuxcote.png" alt="deux cote" className='w-1-3 my-2' />
        <p className="mb-4 text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
            consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
            error officiis atque voluptates magnam!
            <span className="flex items-center my-3 ">
         <span className="h-px flex-1 bg-gray-500"></span>
           </span>
         </p>
          <div className="flex items-center gap-4">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="size-14 rounded-full object-cover"
            />

            <div>
              <div className="flex justify-center gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                ))}
              </div>

              <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
            </div>
          </div>

        
        </blockquote>
      </div>
    </section>
  );
}

export default DisentNosClients;
