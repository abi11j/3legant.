import React from 'react'
import exitImg from '../../../assets/Line.png'
import searchImg from '../../../assets/Vector.png'
import arrImg from '../../../assets/chevron-down.png'
import hartImg from '../../../assets/hart_Button.png'
import instagramImg from '../../../assets/instagram.png'
import facebookImg from '../../../assets/facebook.png'
import youtubeImg from '../../../assets/youtube.png'
import cardImg from '../../../assets/Cart_Button.png'

function Menu(props) {
  return (
    <div className={`fixed ${props.state ? 'flex' : 'hidden'}  z-10 top-0 w-full h-screen`}>
    <div className='w-full h-screen bg-white p-[24px] flex flex-col justify-between'>
        <div className='flex flex-col gap-[16px]'>
            <div className='flex justify-between h-[24px]'>
                <p className='font-medium text-[16px]'>3legant.</p>
                <img className='cursor-pointer' onClick={props.change} src={exitImg} alt="" />
            </div>
            <div className='w-full h-[46px] border border-[#6C7275] rounded-[6px] px-[16px] flex gap-[8px] items-center'>
                <img className='h-[20px]' src={searchImg} alt="" />
                <p className='inter text-[14px] text-[#6C7275]'>Search</p>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <div className='flex justify-between pb-[10px] border-[#E8ECEF] border-b'>
                    <p className='inter text-[14px] font-medium text-[#141718]'>Home</p>
                    <img src="" alt="" />
                </div>
                <div className='flex justify-between pb-[10px] border-[#E8ECEF] border-b'>
                    <p className='inter text-[14px] font-medium text-[#141718]'>Shop</p>
                    <img src={arrImg} alt="" />
                </div>
                <div className='flex justify-between pb-[10px] border-[#E8ECEF] border-b'>
                    <p className='inter text-[14px] font-medium text-[#141718]'>Product</p>
                    <img src={arrImg} alt="" />
                </div>
                <div className='flex justify-between pb-[10px] border-[#E8ECEF] border-b'>
                    <p className='inter text-[14px] font-medium text-[#141718]'>Contact Us</p>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
        <div className='mb-[40px] flex flex-col gap-[16px]'>
            <div className='flex flex-col gap-[8px]'>
                <div className='flex justify-between items-center pb-[8px] border-[#E8ECEF] border-b'>
                    <p className='inter text-[18px] text-[#6C7275] font-medium tracking-[-0.4px]'>Card</p>
                    <img className='h-[24px]' src={cardImg} alt="" />
                </div>
                <div className='flex justify-between items-center pb-[8px] border-[#E8ECEF] border-b'>
                    <p className='inter text-[18px] text-[#6C7275] font-medium tracking-[-0.4px]'>Wishlist</p>
                    <img className='h-[24px]' src={hartImg} alt="" />
                </div>
            </div>
            <button className='bg-[#141718] text-white py-[10px] rounded-[6px]'>Sing in</button>
            <div className='flex gap-[24px] h-[24px]'>
                <img src={instagramImg} alt="" />
                <img src={facebookImg} alt="" />
                <img src={youtubeImg} alt="" />
            </div>
        </div>
    </div>
    <div className='w-[32px] h-screen bg-black/10'></div>
</div>
  )
}

export default Menu