'use client'
import img1 from "../../assets/Logos.svg"
import img2 from "../../assets/arrow.svg"
import Image from "next/image"

import Boxing from "@/app/components/boxing"
// import AddCard from '../../components/addCard'




export default function Contact() {

    return (
      <div>
         <div>
      <div className='fon'>
        <div className='fon-child'>
          <Image src={img1} alt="" />
          <h1>Card</h1>
          <span>
            <p>Home  </p>
            <Image src={img2} alt="" />
            <p> Card</p>
          </span>
        </div>
      </div>
     {/* <AddCard /> */}
      <Boxing />

    </div>
      </div>
    );
  }