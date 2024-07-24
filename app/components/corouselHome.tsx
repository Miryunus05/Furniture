'use client'
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import images9 from "../assets/corousel1.png";
import images10 from "../assets/corousel2.png";
import img1 from "../assets/card1.png";
import img2 from "../assets/card2.png";
import React from 'react';
import Image from "next/image";

function corouselHome() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.5,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div>
      <div className='corouselBar'>
        <div className='corouselBar-child'>
          <h2>50+ Beautiful rooms <br />
            inspiration</h2>
          <p>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
          <Link href={''} className='exploreLink'>Explore More</Link>
        </div>
        <Carousel className='corousel'
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType="desktop" // Set the device type directly
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div><Image className='iimg' src={images9} alt="" /></div>
          <div><Image className='iimg' src={images10} alt="" /></div>
          <div><Image className='iimg' src={img1} alt="" /></div>
          <div><Image className='iimg' src={img2} alt="" /></div>
        </Carousel>
      </div>
    </div>
  );
}

export default corouselHome;