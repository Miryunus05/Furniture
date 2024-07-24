import Image from 'next/image'
import React from 'react'
import galarey1 from "../assets/galarey1.png"
import galarey2 from "../assets/galarey2.png"
import galarey3 from "../assets/galarey3.png"
import galarey4 from "../assets/galarey4.png"
import galarey5 from "../assets/galarey5.png"
import galarey6 from "../assets/galarey6.png"
import galarey7 from "../assets/galarey7.png"
import galarey8 from "../assets/galarey8.png"
import galarey9 from "../assets/galarey9.png"

export default function galareyHome() {
  return (
    <div>
            <div className='galarey'>
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>
        <div className='overflov1 flex flex-wrap'>
              <Image className='w-[274px] h-[380px]' src={galarey1} alt="" />
              <Image className='w-[450px] h-[312px]'  src={galarey2} alt="" />
              <Image className='w-[280px] h-[320px]'  src={galarey3} alt="" />
              <Image className='w-[300px] h-[242px]'  src={galarey4} alt="" />
              <Image className='w-[290px] h-[390px]'  src={galarey5} alt="" />
              <Image className='w-[290px] h-[350px]'  src={galarey6} alt="" />
              <Image className='w-[178px] h-[240px]'  src={galarey7} alt="" />
              <Image className='w-[260px] h-[200px]'  src={galarey8} alt="" />
              <Image className='w-[425px] h-[433px]'  src={galarey9} alt="" />
        </div>
      </div>
    </div>
  )
}
