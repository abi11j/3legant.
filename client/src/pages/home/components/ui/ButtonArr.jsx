import React from 'react'
import img from '../../../../assets/arrow-right.png'

function ButtonArr(props) {
  return (
    <div className='flex gap-[4px] items-center border-b border-[#141718] w-fit'>
        <p className='text-[#141718] inter text-[14px] font-medium leading-[24px] md:text-[18px] md:leading-[28px]'>{props.title}</p>
        <img className='h-[16px] w-[16px]' src={img} alt="" />
    </div>
  )
}

export default ButtonArr