import React from 'react'
import img from '../assets/email.png'
import xl from '../assets/xlemail.png'


function Newsletter() {
  return (
    <>
    <div className='bg-[#F2F4F6] py-[95px] px-[32px] flex flex-col gap-[32px] xl:hidden'>
        <div className='flex flex-col gap-[8px]'>
            <h2  className='text-[#141718] poppins font-medium text-[28px] tracking-[-0.6px] leading-[34px] text-center md:text-[40px] md:leading-[54px]'>Join Our Newsletter</h2>
            <p className='text-[#141718] inter text-[14px] leading-[22px] text-center md:text-[20px]'>Sign up for deals, new products and promotions</p>
        </div>
        <div className='py-[8px] border-b border-[#6c7275]/50 flex justify-between md:w-[80%] md:mx-auto'>
            <div className='flex gap-[8px] items-center'>
                <img className='w-[24px] h-[24px] md:w-[30px] md:h-[30px]' src={img} alt="" />
                <p className='text-[#6C7275] inter font-medium text-[16px] tracking-[-0.4px] leading-[28px] md:text-[19px]'>Email address</p>
            </div>
            <p className='text-[#6C7275] inter font-medium text-[14px] tracking-[-0.4px] leading-[28px] md:text-[18px]'>Singup</p>
        </div>
    </div>
    <div className='hidden relative w-full xl:flex'>
        <img className='w-full' src={xl} alt="" />
        <div className='absolute top-0 left-0 w-full h-full flex justify-center'>
            <div className='flex flex-col justify-center gap-[20px]'>
            <div className='flex flex-col gap-[8px]'>
            <h2  className='text-[#141718] poppins font-medium text-[28px] tracking-[-0.6px] leading-[34px] text-center md:text-[40px] md:leading-[54px]'>Join Our Newsletter</h2>
            <p className='text-[#141718] inter text-[14px] leading-[22px] text-center md:text-[20px]'>Sign up for deals, new products and promotions</p>
        </div>
        <div className='py-[8px] border-b border-[#6c7275]/50 flex justify-between md:w-[80%] md:mx-auto'>
            <div className='flex gap-[8px] items-center'>
                <img className='w-[24px] h-[24px] md:w-[30px] md:h-[30px]' src={img} alt="" />
                <p className='text-[#6C7275] inter font-medium text-[16px] tracking-[-0.4px] leading-[28px] md:text-[19px]'>Email address</p>
            </div>
            <p className='text-[#6C7275] inter font-medium text-[14px] tracking-[-0.4px] leading-[28px] md:text-[18px]'>Singup</p>
        </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Newsletter