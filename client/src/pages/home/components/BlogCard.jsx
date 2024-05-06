import React from 'react'
import ButtonArr from './ui/ButtonArr'


function BlogCard(props) {
  return (
    <div className='flex flex-col gap-[16px]'>
        <img src={props.img} alt="" />
        <div className='flex flex-col gap-[8px]'>
            <p className='text-[#23262F] inter font-semibold text-[16px] leading-[26px] md:text-[25px] md:leading-[35px] xl:text-[20px] xl:leading-[28px]'>{props.title}</p>
            <ButtonArr title={'Read More'} />
        </div>
    </div>
  )
}

export default BlogCard