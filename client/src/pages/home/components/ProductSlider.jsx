import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './productCard';
import prd1 from '../../../assets/prd1.png'
import prd2 from '../../../assets/prd2.png'
import prd3 from '../../../assets/prd3.png'

function ProductSlider() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 770,
            settings: {
              centerMode: false,
              slidesToShow: 2.8,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              centerMode: false,
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 380,
            settings: {
              centerMode: false,
              slidesToShow: 1.4,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="product-slider-container" style={{ overflowX: 'hidden' }}> {/* Dodaj inline stil */}
        <Slider {...settings}>
            <Card img={prd1} title={'Loveseat Sofa'} price={199.00} reprice={400}/>
            <Card img={prd2} title={'Table Lamp'} price={24.99}/>
            <Card img={prd3} title={'Beige Table Lamp'} price={24.99}/>
            <Card img={prd3} title={'Beige Table Lamp'} price={24.99}/>
            <Card img={prd1} title={'Loveseat Sofa'} price={199.00} reprice={400}/>
            <Card img={prd2} title={'Table Lamp'} price={24.99}/>
            <Card img={prd3} title={'Beige Table Lamp'} price={24.99}/>
        </Slider>
    </div>
  )
}

export default ProductSlider
