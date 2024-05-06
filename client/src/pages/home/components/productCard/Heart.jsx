import React from 'react'
import img from '../../../../assets/bannerHeart.png'

function Heart() {
  return (
    <div className='p-[6px] bg-white rounded-[32px]'>
        <img className='h-[20px] w-[20px]' src={img} alt="" />
    </div>
  )
}

export default Heart