import React from 'react'

import NewBadges from './NewBadges'
import GreenBadge from './GreenBadge'
import Heart from './Heart'
import fillImg from '../../../../assets/fillStar.png'

function index(props) {
  return (
    <div className='w-[231px] flex flex-col gap-[12px] md:w-[]'>
        <div className='relative'>
            <img src={props.img} alt="" />
            <div className='absolute flex flex-col top-[16px] left-[16px] gap-[8px]'>
                <NewBadges/>
                <GreenBadge/>
            </div>
            <div className='absolute top-[16px] right-[16px]'>
                <Heart/>
            </div>
        </div>
        <div className='flex flex-col gap-[4px] md:gap-[6px]'>
            <div className='flex gap-[2px]'>
                <img className='h-[16px] w-[16px] md:w-[20px] md:h-[20px]' src={fillImg} alt="" />
                <img className='h-[16px] w-[16px] md:w-[20px] md:h-[20px]' src={fillImg} alt="" />
                <img className='h-[16px] w-[16px] md:w-[20px] md:h-[20px]' src={fillImg} alt="" />
                <img className='h-[16px] w-[16px] md:w-[20px] md:h-[20px]' src={fillImg} alt="" />
                <img className='h-[16px] w-[16px] md:w-[20px] md:h-[20px]' src={fillImg} alt="" />
            </div>
            <p className='text-[#141718] inter font-semibold text-[16px] leading-[26px] md:text-[20px]'>{props.title}</p>
            <div className='flex gap-[12px] md:gap-[18px]'>
                <p className='text-[#141718] inter font-semibold text-[14px] leading-[22px] md:text-[18px]'>${props.price}</p>
               
               {props.reprice && <p className='text-[#6C7275] inter text-[14px] leading-[22px] strikethrough line-through md:text-[17px]'>${props.reprice}</p>}
            </div>     
        </div>
    </div>
  )
}

export default index