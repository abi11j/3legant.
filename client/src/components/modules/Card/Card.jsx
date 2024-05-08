import React from 'react';
import exitImg from '../../../assets/Line.png';
import CardProduct from './CardProduct';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Card(props) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2, // Prikaži dva proizvoda po Y osi
        slidesToScroll: 1,
        vertical: true, // Postavi vertikalni slider
        verticalSwiping: true, // Omogući vertikalno povlačenje
        centerMode: true,
        centerPadding: '50px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: true, 
                    centerMode: false,
                    verticalSwiping: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: true, 
                    centerMode: false,
                    verticalSwiping: true,
                }
            }
        ]
    };

    return (
        <div className={`fixed ${props.state ? 'flex' : 'hidden'} top-0 gap-0 w-full h-screen z-10`}>
            <div className='w-[32px] lg:w-full bg-black/50 '></div>
            <div className='p-[24px] lg:w-[423px] flex flex-col w-full justify-between bg-white'>
                <div className='w-full'>
                    <div className='w-full flex justify-between items-center'>
                        <h1 className='text-[#121212] poppins font-medium text-[28px] tracking-[-0.6px] leading-[34px]'>Card</h1>
                        <img className='w-[24px] h-[24px] cursor-pointer' onClick={props.change} src={exitImg} alt="" />
                    </div>
                    <div className="product-slider-container flex flex-col gap-[16px]">
                        <Slider {...settings}>
                            <CardProduct title={'Nesto prvo'} /> 
                            <CardProduct title={'Nesto drugo'} />
                            <CardProduct title={'Nesto trece'} /> 
                            <CardProduct title={'Nesto četvrto'} />
                            {/* Dodaj više proizvoda */}
                        </Slider>
                    </div>
                </div>
                <div className='flex flex-col gap-[16px] mb-[40px]'>
                    <div className='flex flex-col'>
                        <div className='flex justify-between py-[13px] border-b border-[#CCCCCC]'>
                            <p className='text-[#141718] inter text-[16px] leading-[26px]' >Subtotal</p>
                            <p className='text-[#141718] inter text-[16px] leading-[26px] font-semibold' >$99.00</p>
                        </div>
                        <div className='flex justify-between py-[13px]'>
                            <p className='text-[#141718] poppins font-medium text-20 leading-[28px]' >Total</p>
                            <p className='text-[#141718] poppins font-medium text-[20px] leading-[28px]' >$234.00</p>
                        </div>
                    </div>
                    <div>
                        <button className='bg-black rounded-[6px] py-[10px] w-full text-white inter font-medium text-[18px] leading-[32px] tracking-[-0.4px]'>Checkout</button>
                        <button className='py-[10px] w-full mx-auto text-black inter font-semibold text-[14px] leading-[22px]'>View Cart</button>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Card;
