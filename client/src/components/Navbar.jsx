import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import menuImg from '../assets/menu-line-horizontal.png'
import cardImg from '../assets/Cart_Button.png'
import Card from './modules/Card/Card'
import Menu from './modules/Menu/Menu';

function Navbar() {
    const location = useLocation();
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

   
    const nav_links = [
        {title: 'Home', href: '/'},
        {title: 'Shop', href: '/shop'},
        {title: 'Blog', href: '/blog'},
        {title: 'Contact Us', href: '/contactus'},
    ]

    return (
        <>
            <div className=' h-[60px] px-[32px] poppins lg:max-w-[1020px] lg:mx-auto lg:p-0'>
                <div className='flex h-full justify-between items-center'>
                    <div className='flex gap-[4px] items-center'>
                        <img className='md:h-[30px] lg:hidden' onClick={handleOpen} src={menuImg} alt="" />
                        <p className='text-[16px] font-medium md:text-[24px] lg:leading-[24px]' >3legant.</p>
                    </div>
                    <ul className='hidden lg:flex gap-[40px] inter font-medium text-[14px] '>
                        {nav_links.map(link=>(
                            <li className={`${
                            classNames({
                                'hover:text-[#141718] transition-colors': true,
                                'text-[#141718]': link.href === location.pathname,
                                'text-[#6C7275]': link.href !== location.pathname,
                            })}
                            `} key={link.href}>
                                <Link to={link.href}>
                                    {link.title}
                                </Link></li>
                        ))}
                    </ul>
                    <div>
                        <img className='h-[24px] md:h-[30px] rounded-lg hover:bg-gray-100 transition-colors cursor-pointer' onClick={handleOpenCard} src={cardImg} alt="" />
                    </div>
                </div>
            </div>

            <Card state={card} change={handleExitCard} />
            <Menu state={menu} change={handleExit} />

           
        </>
    )
}

export default Navbar;
