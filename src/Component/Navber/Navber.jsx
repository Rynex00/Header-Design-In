import React from 'react'

const Navber = () => {
  return (
    <div className=' container mx-auto px-4'>
      <div className='flex justify-between items-center text-white font-poppins py-10'>
        <div>
          <h1 className='text-3xl font-bold'>EV-olution</h1>
        </div>
        <div className='hidden lg:block'>
        <ul className=' flex items-center gap-24'>
          <li>HOME</li>
          <li>EXPLORE</li>
          <li>ABOUT</li>
          <li className=' border bg-white rounded-full px-5 py-1 text-black font-semibold'>CONTACT</li>
        </ul>
        </div>
      </div>

    </div>
  )
}

export default Navber