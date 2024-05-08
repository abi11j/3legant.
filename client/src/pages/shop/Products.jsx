import React from 'react'
import filter from '../../assets/shop/filter.png'
import t1 from '../../assets/shop/t1.png'
import t2 from '../../assets/shop/t2.png'
import arr from '../../assets/shop/arr.png'
import Card from './components/productCard'

import prd1 from '../../assets/prd1.png'
import prd2 from '../../assets/prd2.png'
import prd3 from '../../assets/prd3.png'

function Products() {
  return (
    <div className='px-[32px] pb-[80px] flex flex-col gap-[32px]'>
        <div className='py-[32px] flex flex-col gap-[16px] '>
            <div className='flex justify-between items-center border-t border-b border-[#CCCCCC] py-[8px] w-full'>
                <div className='flex gap-[8px]'>
                    <img className='h-[24px] w-[24px]' src={filter} alt="" />
                    <p className='text-[#121212] inter font-semibold text-[16px] leading-[26px]'>Filter</p>
                </div>
                <div className='flex border-[#EAEAEA] border-[2px] h-[40px]'>
                    <img src={t1} alt="" />
                    <img src={t2} alt="" />
                </div>
            </div>
            <div className='flex justify-between'>
                <p className='inter font-semibold text-[16px] leading-[26px]'>Living Room</p>
                <div className='flex gap-[4px] items-center'>
                    <p className='text-[#121212] inter font-semibold text-[16px] leading-[26px]'>Sort by</p>
                    <img className='w-[20px] h-[20px]' src={arr} alt="" />
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 space-x-[8px] space-y-[16px] md:grid-cols-3 md:space-x-[25px] md:space-y-[35px] lg:grid-cols-4'>
            <div className='hidden'></div>
            <Card img={prd2} title={'Table Lamp'} price={24.99}/>
            <Card img={prd3} title={'Beige Table Lamp'} price={24.99}/>
            <Card img={prd3} title={'Beige Table Lamp'} price={24.99}/>
            <Card img={prd1} title={'Loveseat Sofa'} price={199.00} reprice={400}/>
            <Card img={prd2} title={'Table Lamp'} price={24.99}/>
            <Card img={prd3} title={'Beige Table Lamp'} price={24.99}/>
        </div>
        <div className='py-[6px] px-[40px] text-[#141718] inter font-medium text-[16px] leading-[28px] tracking-[-0.4px] mx-auto border border-[#141718] rounded-[80px] hover:bg-[#141718] hover:text-white transition-colors cursor-pointer md:scale-110 md:mt-[30px] '>Show more</div>
    </div>
  )
}

export default Products