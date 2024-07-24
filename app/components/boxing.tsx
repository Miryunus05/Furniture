import Image from 'next/image'
import React from 'react'
import icon1 from "../assets/icon1.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon3.svg"
import icon4 from "../assets/icon4.svg"

function boxing() {
  return (
    <div>
            <div className='inner mb-8 mt-8'>
        <div className='flex gap-12'>
          <div className='inner-child flex items-center justify-center gap-3'>
            <Image src={icon2} alt="" />
            <span>
              <h2>High Quality</h2>
              <p>crafted from top materials</p>
            </span>
          </div>
          <div className='inner-child flex items-center justify-center gap-3'>
            <Image src={icon1} alt="" />
            <span>
              <h2>Warranty Protection</h2>
              <p>Over 2 years</p>
            </span>
          </div>
          <div className='inner-child flex items-center justify-center gap-3'>
            <Image src={icon3} alt="" />
            <span>
              <h2>Free Shipping</h2>
              <p>Order over 150 $</p>
            </span>
          </div>
          <div className='inner-child flex items-center justify-center gap-3'>
            <Image src={icon4} alt="" />
            <span>
              <h2>24 / 7 Support</h2>
              <p>Dedicated support</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default boxing
