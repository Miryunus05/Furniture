'use client'
import img1 from "../../assets/Logos.svg"
import img2 from "../../assets/arrow.svg"
import icon5 from "../../assets/maps.svg"
import icon6 from "../../assets/clock.svg"
import icon7 from "../../assets/bxs_phone.svg"
import Image from "next/image"
import SectionHeader from "../../components/SectionHeader"
import ContactForm from "../../components/ContactForm"
import Boxing from "@/app/components/boxing"




export default function Contact() {

    return (
      <div>
         <div>
      <div className='fon'>
        <div className='fon-child'>
          <Image src={img1} alt="" />
          <h1>Contact</h1>
          <span>
            <p>Home  </p>
            <Image src={img2} alt="" />
            <p> Contact</p>
          </span>
        </div>
      </div>
      <SectionHeader
        title='Get In Touch With Us'
        subTitle='For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!'
      />
      <div className="flex flex-row">
        <div className="w-1/2">
          <div className="flex flex-col justify-center items-center gap-8 mt-10">
            <div className="boxes" >
              <Image src={icon5} alt="" />
              <h3>Address</h3>
              <p className="w-[190px]">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div className="boxes" >
              <Image src={icon7} alt="" />
              <h3>Phone</h3>
              <p className="w-[200px]">Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
            </div>
            <div className="boxes" >
              <Image src={icon6} alt="" />
              <h3>Working Time</h3>
              <p className="w-[200px]">Monday-Friday: 9:00 - 22:00    <br />Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <ContactForm />

        </div>
      </div>
      <Boxing />

    </div>
      </div>
    );
  }