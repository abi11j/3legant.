import React from 'react'
import Banner from '../../components/Banner'
import Navbar from '../../components/Navbar'
import Hero from './Hero'
import BannerGrid from './BannerGrid'
import ProductCarousel from './ProductCarousel'
import Values from './Values'
import HomeBanner from './HomeBanner'
import BlogSection from './BlogSection'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

function index() {
  return (
    <div>
        <Banner/>
        <Navbar/>
        <Hero/>
        <BannerGrid/>
        <ProductCarousel/>
        <Values/>
        <HomeBanner/>
        <BlogSection/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default index