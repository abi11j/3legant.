import React from 'react'
import sm_img from '../../assets/shop/hero.png'
import md_img from '../../assets/shop/mdHero.png'

function Hero() {
  return (
    <div className='px-[32px] md:p-0 md:max-w-[1020px] md:mx-auto'>
        <div className='relative'>
            <img className='w-full md:hidden' src={sm_img} alt="" />
            <img className='hidden md:flex w-full' src={md_img} alt="" />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col gap-[16px] justify-center'>
                <p className='inter font-medium text-[14px] leading-[24px] text-[#605F5F] text-center'>Home &gt; <span className='text-[#121212] '>Shop</span></p>
                <h1 className='poppins font-medium text-[40px] leading-[44px] tracking-[-0.4px] text-center'>Shop Page</h1>
                <p className='text-[#121212] inter text-[16px] leading-[26px] text-center' >Let’s design the place you always imagined.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero