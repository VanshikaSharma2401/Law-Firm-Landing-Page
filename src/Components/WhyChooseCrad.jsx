import React from 'react'
import Image from 'next/image'
import Whychooseus from '../../public/whyChooseUs.svg'
import Yellowbutton from './Yellowbutton'
const WhyChooseCrad = ({cardData,isReadMore}) => {
    console.log(cardData,"whyChooseUsData>>>>")
  return (
    <div className='border-[1px] border-gray-400 rounded-md text-white p-4 flex flex-col gap-4 max-w-[40%]'>
      <Image src={Whychooseus} className='w-16 h-16 rounded-xl' width={4} height={4}/>
      <p className='text-2xl'>{cardData?.title}</p>
      <p>{cardData?.desc}</p>
      {isReadMore && (
        <div>
        <Yellowbutton data={"Read More"}/>
        </div>
      )}
    </div>
  )
}

export default WhyChooseCrad
