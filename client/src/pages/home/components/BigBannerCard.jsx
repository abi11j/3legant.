import React from 'react'
import img from '../../../assets/BigCard.png'
import ButtonArr from './ui/ButtonArr'

function BigBannerCard() {
  return (
    <div className='relative'>
        <img className='w-full' src={img} alt="" />
        <div className='absolute flex flex-col gap-[8px] top-[32px] left-[32px]'>
            <h2 className='text-[#141718] poppins text-[28px] font-medium tracking-[-0.6px] md:text-[40px]'>Living Room</h2>
            <ButtonArr title={'Shop Now'}/>
        </div>
    </div>
  )
}

export default BigBannerCard