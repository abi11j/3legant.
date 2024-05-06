import React from 'react'
import ButtonArr from './ui/ButtonArr'

function SmallBannerCard(props) {
  return (
    <div className='relative'>
        <img className='w-full' src={props.img} alt="" />
        <div className='absolute bottom-[32px] left-[32px]'>
        <h2 className='text-[#141718] poppins text-[28px] font-medium tracking-[-0.6px] md:text-[40px]'>{props.title}</h2>
        <ButtonArr title={'Shop Now'}/>
        </div>
    </div>
  )
}

export default SmallBannerCard