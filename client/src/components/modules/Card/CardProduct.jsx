import React from 'react'
import cp1 from '../../../assets/cp1.png'
import minus from '../../../assets/Minus.png'
import add from '../../../assets/Add.png' 
import exitImg from '../../../assets/Line.png'

function CardProduct(props) {
  return (
    <div className='py-[20px] w-full border-[#CCCCCC] border-b'>
        <div className='flex w-full items-center gap-[16px]'>
            <img className='w-[80px] h-[96px]' src={cp1} alt="" />
            <div className='flex w-full justify-between items-start'>
                <div className='flex flex-col gap-[8px]'>
                    <h3 className='text-[#141718] inter font-semibold text-[14px] leading-[22px] '>{props.title}</h3>
                    <p className='text-[#6C7275] inter text-[12px] leading-[20px]'>Colour: Black</p>
                    <div className='py-[12px] w-[80px] h-[32px] px-[8px] rounded-[4px] border-[#6C7275] border flex justify-between items-center'>
                        <img className='w-[16px] h-[16px]' src={minus} alt="" />
                        <p className='text-[#121212] inter font-semibold text-[12px] leading-[20px]'>2</p>
                        <img  className='w-[16px] h-[16px]' src={add} alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-[4px] items-end'>
                    <p className='text-[#121212] inter font-semibold text-[14px] leading-[22px]'>$19.19</p>
                    <img src={exitImg} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardProduct