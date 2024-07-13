import React from 'react';

function Page() {
  return (
    <section className='centred'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-center text-4xl text-blue-400 font-bold mb-4'>Our Collection Of Products</h1>
        
        <div className='flex items-center rounded-md gap-1 shadow-xl '>
          {/* Select Category */}
          <select
            name="Category"
            id="Category"
            className="   text-gray-600 sm:text-sm  px-4 py-2 border-r-2 "
          >
            <option value="">All Category</option>
            <option value="JM">John Mayer</option>
            <option value="SRV">Stevie Ray Vaughn</option>
            <option value="JH">Jimi Hendrix</option>
            <option value="BBK">B.B King</option>
            <option value="AK">Albert King</option>
            <option value="BG">Buddy Guy</option>
            <option value="EC">Eric Clapton</option>
          </select>

          <div className="relative w-full max-w-xs">
            <label htmlFor="Search" className="sr-only">Search</label>
            
            {/* Search Bar */}
            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full  py-2.5 pe-10  sm:text-sm "
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button type="button" className="bg-sky-500 rounded-md text-white px-2 py-3">
                <span className="sr-only">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Page;
