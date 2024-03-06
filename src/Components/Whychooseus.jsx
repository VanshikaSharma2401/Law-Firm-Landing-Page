import React from 'react'
import WhyChooseCrad from './WhyChooseCrad'
import { whyChooseUsData } from '@/Constants/Constant'
console.log(whyChooseUsData,"whyChooseUsData from constant")
const Whychooseus = () => {
  return (
    <div className='py-6 flex flex-col gap-8 px-36'>
      <p className='text-4xl text-white text-center'>Why Choose us?</p>
      <div className='flex gap-6'>
      {whyChooseUsData.map((data) => (
                <WhyChooseCrad key={data.id} cardData={data} isReadMore={true}/>
            ))}
      </div>
    </div>
  )
}

export default Whychooseus
