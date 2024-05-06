import React from 'react'
import ProductSlider from './components/ProductSlider';
import ButtonArr from './components/ui/ButtonArr';

function ProductCarousel() {
  return (
    <div className='flex flex-col gap-[40px] py-[32px] pl-[32px] md:py-[85px] lg:max-w-[1020px] lg:mx-auto lg:px-0 lg:py-[50px]'>
      <div className='hidden lg:flex justify-between items-end'>
        <h1 className='poppins font-medium text-[34px] tracking-[-0.6px] leading-[38px] md:text-[40px]'>New <br /> Arrivals</h1>
        <ButtonArr title={'More Products'}/>
      </div>
        <h1 className='poppins font-medium text-[34px] tracking-[-0.6px] leading-[38px] md:text-[40px] lg:hidden'>New <br /> Arrivals</h1>
        <ProductSlider/>
        <div className='lg:hidden'>
        <ButtonArr className='lg:hidden' title={'More Products'}/>
        </div>
    </div>
    )
}

export default ProductCarousel
