import Slider from 'react-slick';
import React from 'react'
import { Image } from 'antd';

const SliderComponent = ({arrImage}) => {
    const setting = {
        dots: true, 
        infinite: true,
        speed: 500,
        sliderToShow: 1,
        sliderToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };
  return (
    <Slider {...setting} >
            {arrImage.map((image)=> {
                return (
                    <Image src={image} alt="slider" preview ={false} width="100%" height="300px"/>
                )
            })}
    </Slider>
  )
}

export default SliderComponent
