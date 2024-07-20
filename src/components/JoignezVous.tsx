import React from 'react'

function JoignezVous() {
  return (
    <section className='centred flex justify-center items-center flex-col gap-16'>
        <div className='text-center items-center flex flex-col gap-4'>
            <h1 className='text-gray-900 text-4xl font-bold'>JOIGNEZ-VOUS</h1>
            <h2 className='text-md text-gray-500 font-mono'>Sign up to receive inspiration, product updates, and special offers from our team. </h2>
        </div>
        <div className='flex justify-center'>
  <label
    htmlFor="UserEmail"
    className="ml-2 px-4 -mx-3 relative overflow-hidden rounded-tl-xl rounded-bl-xl border-t-2 border-l-2 border-b-2 border-primary  shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 flex items-center"
  >
    <input
      type="email"
      id="UserEmail"
      placeholder="Email"
      className="peer h-10 w-full border-none bg-transparent px-3 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
    />

    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs text-blue-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
      Email
    </span>
  </label>
  <a href="#" className="bg-primary rounded-tr-xl rounded-br-xl text-white px-4 py-2 ml-2">
      Envoye
    </a>
</div>

    </section>
  )
}

export default JoignezVous