import React from 'react'
import Yellowbutton from './Yellowbutton'

const Subscribe = () => {
  return (
    <div className='py-6  my-16 flex flex-col gap-8 mx-36 bg-[#474747] min-h-[250px] justify-center items-center'>
      <p className='text-4xl text-white text-center'>Subscribe Our Newsletter</p>
      <div className='flex gap-2'>
      <input type="text" className='outline-none bg-white p-2 rounded-l-lg' placeholder='Name:'/>
      <input type="text" className='outline-none bg-white p-2 ' placeholder='Enter your Email:'/>
      <Yellowbutton data={"Send"} className={"rounded-r-lg rounded-l-none"}/>
      </div>
    </div>
  )
}

export default Subscribe
