import React from 'react'
import ButtonArr from './components/ui/ButtonArr'
import BlogCard from './components/BlogCard'
import bs1 from '../../assets/bs1.png'
import bs2 from '../../assets/bs2.png'
import bs3 from '../../assets/bs3.png'


function BlogSection() {
  return (
    <div className='px-[32px] py-[40px] flex flex-col gap-[40px] xl:max-w-[1020px] xl:mx-auto xl:py-[80px]'>
        <div className='flex justify-between items-end'>
            <h1 className='poppins font-medium text-[34px] tracking-[-0.6px] leading-[38px]'>Articles</h1>
            <ButtonArr title={'More Articles'} />
        </div>
        <div  className='flex flex-col gap-[24px] md:gap-[54px] xl:flex-row xl:gap-[25px]'>
            <BlogCard img={bs1} title={'7 ways to decor your home'}/>
            <BlogCard img={bs2} title={'Kitchen organization'}/>
            <BlogCard img={bs3} title={'Decor your bedroom'}/>
        </div>
    </div>
  )
}

export default BlogSection