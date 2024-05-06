import React from 'react'
import ValueCard from './components/ValueCard'
import val1 from '../../assets/val1.png'
import val2 from '../../assets/val2.png'
import val3 from '../../assets/val3.png'
import val4 from '../../assets/val4.png'

function Values() {
  return (
    <div className='p-[32px] flex flex-col gap-[7px] md:pb-[60px] lg:flex-row lg:w-fit lg:mx-auto lg:px-0 lg:py-[50px]'>
      <div className=' flex gap-[10px]'>
      <ValueCard img={val1} title={'Free Shipping'} f={'Order'} s={'above $200'}/>
        <ValueCard img={val2} title={'Money-back'} f={'30 days'} s={'guarantee'}/>
      </div>
      <div className=' flex gap-[10px]'>
      <ValueCard img={val3} title={'Secure Payments'} f={'Secured'} s={'by Strip'}/>
        <ValueCard img={val4} title={'24/7 Support'} f={'Phone and'} s={'Email support'}/>
      </div>
 
    </div>
  )
}

export default Values