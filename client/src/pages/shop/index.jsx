import React from 'react'
import Navbar from '../../components/Navbar'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'
import Hero from './Hero'
import Products from './Products'
import Banner from '../../components/Banner'

function index() {
  return (
    <div>
        <Banner/>
        <Navbar/>
        <Hero/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default index