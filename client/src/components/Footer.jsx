import React from 'react'
import img1 from '../assets/instagramW.png'
import img2 from '../assets/facebookW.png'
import img3 from '../assets/youtubeW.png'

function Footer() {
  return (
    <>
    <div className='flex flex-col gap-[40px] px-[32px] py-[48px] bg-[#232627] lg:hidden'>
        <div className='flex flex-col gap-[40px]'>
           <div className='flex flex-col gap-[16px]'>
           <h1 className='text-white popins font-medium text-[24px] leading-[24px] text-center md:text-[28px]'>3legant</h1>
            <div className='w-[24px] h-[1px] mx-auto bg-[#6C7275] md:w-[28px]'></div>
            <p className='text-[#FEFEFE] inter text-[14px] leading-[22px] text-center md:text-[16px]'>Gift & Decoration Store</p>
           </div>
           <ul className='flex flex-col gap-[32px] text-[#FEFEFE] inter text-[14px] laeding-[22px] text-center md:flex-row md:mx-auto md:text-[16px]'>
                <li>Home</li>
                <li>Shop</li>
                <li>Product</li>
                <li>Blog</li>
                <li>Contact Us</li>
           </ul>
        </div>
        <div className='border-t border-[#6C7275] flex flex-col gap-[32px] py-[32px]'>
            <div className='flex gap-[24px] w-fit mx-auto'>
                <img className='md:w-[30px] md:h-[30px]' src={img1}  alt="" />
                <img className='md:w-[30px] md:h-[30px]' src={img2} alt="" />
                <img className='md:w-[30px] md:h-[30px]' src={img3} alt="" />
            </div>
            <div className='flex flex-col gap-[28px] w-fit mx-auto'>
                <div className='flex gap-[28px] text-[#FEFEFE] poppins font-semibold text-[12px] w-fit mx-auto md:text-[14px]'>
                    <p>Private Policy</p>   
                    <p>Terms of Use</p>
                </div>
                <p className='text-[#CCCCCC] poppins text-[12px] leading-[20px] md:text-[14px]'>Copyright © 2023 3legant. All rights reserved</p>
            </div>
        </div>
    </div>
    <div className='bg-[#141718]'>
    <div className=' py-[80px] max-w-[1020px] mx-auto hidden lg:flex flex-col gap-[80px]'>
        <div className='flex justify-between items-center'>
        <div className='flex gap-[32px] items-center'>
            <h1 className='poppins font-medium leading-[24px] text-white text-[24px]'>3legant.</h1>
            <div className='w-[1px] h-[24px] bg-[#6C7275]'></div>
            <p className='inter leading-[22px] text-[14px] text-[#CCCCCC]'>Gift & Decoration Store</p>
        </div>
        <ul className='flex gap-[32px] text-[#FEFEFE] inter leading-[22px] text-center text-[16px]'>
                <li>Home</li>
                <li>Shop</li>
                <li>Product</li>
                <li>Blog</li>
                <li>Contact Us</li>
        </ul>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex gap-[28px]'>
            <p className='text-[#CCCCCC] poppins leading-[20px] text-[14px]'>Copyright © 2023 3legant. All rights reserved</p>
            <div className='flex gap-[28px] text-[#FEFEFE] poppins font-semibold w-fit mx-auto text-[14px]'>
                    <p>Private Policy</p>   
                    <p>Terms of Use</p>
                </div>
            </div>
            <div className='flex gap-[24px]'>
            <img className='w-[24px] h-[24px]' src={img1}  alt="" />
                <img className='w-[24px] h-[24px]' src={img2} alt="" />
                <img className='w-[24px] h-[24px]' src={img3} alt="" />
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer