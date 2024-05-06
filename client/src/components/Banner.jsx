import React from 'react'
import conImg from '../assets/ticket-percent.png'
import closeImg from '../assets/close.png'

function Banner() {
  return (
    <div className='h-[36px]  bg-[#F3F5F7] flex items-center inter md:h-[40px]'>
        <div className='mx-auto w-fit flex gap-[22px] h-[16px] items-center'>
            <div className='flex gap-[8px] items-center'>
                <img src={conImg} alt="" />
                <p className='text-[#343839] text-[12px] font-semibold md:text-[15px]'>30% off storewide — Limited time!</p>
            </div>
            <img src={closeImg} alt="" />
        </div>
    </div>
  )
}

export default Banner