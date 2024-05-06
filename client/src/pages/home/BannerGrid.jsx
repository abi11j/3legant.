import React from 'react'
import BigBannerCard from './components/BigBannerCard'
import SmallBannerCard from './components/SmallBannerCard'
import img1 from '../../assets/smImg1.png'
import img2 from '../../assets/smImg2.png'


function BannerGrid() {
  return (
    <>
    <div className='px-[32px] flex flex-col gap-[16px] lg:hidden'>
        <BigBannerCard/>
        <SmallBannerCard img={img1} title={'Bedroom'}/>
        <SmallBannerCard img={img2} title={'Kitchen'}/>
    </div>
    <div className=' hidden w-full gap-[24px] lg:flex lg:max-w-[1020px] lg:mx-auto'>
      <div className='w-[50%]'>
      <BigBannerCard/>
      </div>
        <div className='flex flex-col w-[50%] gap-[24px]'>
        <SmallBannerCard img={img1} title={'Bedroom'}/>
        <SmallBannerCard img={img2} title={'Kitchen'}/>
        </div>
    </div>
    </>
  )
}

export default BannerGrid