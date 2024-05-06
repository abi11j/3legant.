import React, { useState, useEffect } from 'react';
import menuImg from '../assets/menu-line-horizontal.png'
import cardImg from '../assets/Cart_Button.png'
import exitImg from '../assets/Line.png'
import searchImg from '../assets/Vector.png'
import arrImg from '../assets/chevron-down.png'
import hartImg from '../assets/hart_Button.png'
import instagramImg from '../assets/instagram.png'
import facebookImg from '../assets/facebook.png'
import youtubeImg from '../assets/youtube.png'
import Card from './modules/Card/Card'

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [card, setCard] = useState(false);

    const handleExit = () => {
        setMenu(false);
    }

    const handleOpen = () => {
        setMenu(true);
    }

    const handleExitCard = () => {
        setCard(false);
    }

    const handleOpenCard = () => {
        setCard(true);
    }

    useEffect(() => {
        const handleResize = () => {
            document.body.style.overflow = menu || card ? 'hidden' : 'auto';
        };

        window.addEventListener('resize', handleResize);

        document.body.style.overflow = menu || card ? 'hidden' : 'auto';

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [menu, card]);

    return (
        <>
            <div className=' h-[60px] px-[32px] poppins lg:max-w-[1020px] lg:mx-auto lg:p-0'>
                <div className='flex h-full justify-between items-center'>
                    <div className='flex gap-[4px] items-center'>
                        <img className='md:h-[30px] lg:hidden' onClick={handleOpen} src={menuImg} alt="" />
                        <p className='text-[16px] font-medium md:text-[24px] lg:leading-[24px]' >3legant.</p>
                    </div>
                    <ul className='hidden lg:flex gap-[40px] text-[#6C7275] inter font-medium text-[14px]'>
                        <li className='text-[#141718]'>Home</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                    <div>
                        <img className='h-[24px] md:h-[30px]' onClick={handleOpenCard} src={cardImg} alt="" />
                    </div>
                </div>
            </div>

            <Card state={card} change={handleExitCard} />

            <div className={`fixed ${menu ? 'flex' : 'hidden'}  z-10 top-0 w-full h-screen`}>
                <div className='w-full h-screen bg-white p-[24px] flex flex-col justify-between'>
                    <div className='flex flex-col gap-[16px]'>
                        <div className='flex justify-between h-[24px]'>
                            <p className='font-medium text-[16px]'>3legant.</p>
                            <img onClick={handleExit} src={exitImg} alt="" />
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
        </>
    )
}

export default Navbar;
