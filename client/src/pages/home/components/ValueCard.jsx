import React from 'react'


function ValueCard(props) {
  return (
    <div className='bg-[#F3F5F7] py-[32px] w-full flex flex-col gap-[16px] px-[16px] lg:px-[38px] lg:py-[48px]'>
        <img className='w-[48px] h-[48px] md:h-[60px] md:w-[60px]' src={props.img} alt="" />
        <div className='flex flex-col gap-[4px] md:gap-[5px]'>
            <p className='text-[#141718] inter font-semibold text-[14px] leading-[22px] md:text-[20px]'>{props.title}</p>
            <p className='text-[#6C7275] text-[14px] leading-[22px] md:text-[18px]'>{props.f} <br className='lg:hidden' />{props.s}</p>
        </div>
    </div>
  )
}

export default ValueCard