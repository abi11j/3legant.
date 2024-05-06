import React from 'react'
import smImg from '../../assets/hero_sm.png'
import lgImg from '../../assets/herolg.png'

function Hero() {
  return (
    <div className='px-[32px] pb-[40px] flex flex-col gap-[32px] lg:max-w-[1020px] lg:mx-auto lg:px-0'>
        <dir className='w-full relative'>
            <img className='hidden lg:flex' src={lgImg} alt="" />
            <img className='w-full lg:hidden' src={smImg} alt="" />
            <div className=' absolute bottom-0 w-full '>
                <div className='w-fit mx-auto flex gap-[16px] mb-[16px] lg:hidden'>
                    <div className='w-[30px] h-[8px] bg-white rounded-[100px]'></div>
                    <div className='w-[8px] h-[8px] bg-white rounded-[100px]'></div>
                    <div className='w-[8px] h-[8px] bg-white rounded-[100px]'></div>
                </div>
            </div>
        </dir>
        <div className='flex flex-col gap-[16px] lg:flex-row lg:items-center lg:gap-[30px]'>
            <h1 className='text-[#141718] poppins text-[40px] tracking-[-0.4px] leading-[44px] font-medium md:text-[48px] lg:w-[80%] lg:text-[62px] lg:leading-[76px]'>Simply Unique/ <br />Simply Better.</h1>
            <p className='text-[#6C7275] inter text-[14px] leading-[22px] md:text-[18px] lg:text-[20px] lg:leading-[28px]'> <span className='font-semibold text-[#343839]'>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
        </div>
    </div>
  )
}

export default Hero