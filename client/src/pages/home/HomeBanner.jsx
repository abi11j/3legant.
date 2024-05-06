import React from 'react'
import img from '../../assets/hemeBanner.png'
import ButtonArr from './components/ui/ButtonArr'

function HomeBanner() {
  return (
    <div className='flex flex-col xl:flex-row xl:w-full'>
      <img className='w-full xl:w-[50%]' src={img}  alt="" />
      <div className='p-[32px] flex flex-col gap-[24px] bg-[#F3F5F7] xl:justify-center xl:w-[50%]'>
        <div className='flex flex-col gap-[16px] '>
          <p className='text-[#377DFF] inter font-bold text-[16px] md:text-[20px]'>SALE UP TO 35% OFF</p>
          <h1 className='text-[#141718] poppins font-medium text-[34px] tracking-[-0.6px] leading-[38px] md:text-[40px] xl:leading-[44px]'>HUNDREDS of <br /> New lower prices!</h1>
          <p className='text-[#141718] inter text-[16px] leading-[26px] md:text-[18px] xl:text-[20px] xl:leading-[32px]'>It’s more affordable than ever to give every room in your home a stylish makeover</p>
        </div>
        <ButtonArr title={'Shop Now'}/>
      </div>
    </div>
  )
}

export default HomeBanner