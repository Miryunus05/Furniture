'use client'
import img1 from "../../assets/Logos.svg"
import img2 from "../../assets/arrow.svg"
import Image from "next/image"
import SectionHeader from "../../components/SectionHeader"
import ContactForm from "../../components/checkoutForm"
import Boxing from "@/app/components/boxing"




export default function Contact() {

    return (
      <div className=" flex justify-center">
         <div className="w-[100%]">
      <div className='fon'>
        <div className='fon-child'>
          <Image src={img1} alt="" />
          <h1>Checkout</h1>
          <span>
            <p>Home  </p>
            <Image src={img2} alt="" />
            <p> Checkout</p>
          </span>
        </div>
      </div>
      <SectionHeader
        title='Get In Touch With Us'
        subTitle='For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!'
      />
      <div className="flex justify-center">
      <div className="flex flex-row max-w-[1500px] gap-20 relative">

        <div className="w-1/2">
          <ContactForm />

        </div>


        <div className="w-1/2">
          <div className="flex flex-col justify-center items-center gap-8 mt-10 max-w-[470px]">
        <div className="w-[100%] border-b-2 pb-7">
        <span className="flex justify-between py-5 font-semibold text-[25px]">
                <p>Product</p>
                <p>Subtotal</p>
            </span>
            <span className="flex justify-between">
                <p className="text-[#9F9F9F]">Asgaard sofa <span className="text-black"> x  1</span></p>
                <p>Rs. 250,000.00</p>
            </span>
            <span className="flex justify-between py-5">
                <p>Subtotal</p>
                <p>Rs. 250,000.00</p>
            </span>
            <span className="flex justify-between ">
                <p>Total</p>
                <p className="font-bold text-[24px] text-[#B88E2F]">Rs. 250,000.00</p>
            </span>
        </div>
        <div>
        <span className="flex gap-3 items-center pb-5 font-[600]">
            <input type="radio" id="use" />
            <label htmlFor="use">Direct Bank Transfer</label>
        </span>
        <p className="text-gray-500">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
        <span className="flex gap-3 items-center leading-10 pt-5">
            <input type="radio" id="use2" name="radio" disabled/>
            <label htmlFor="use2" className="text-gray-500">Direct Bank Transfer</label>
        </span>
        <span className="flex gap-3 items-center pb-5">
            <input type="radio" id="use3" name="radio" disabled/>
            <label htmlFor="use3" className="text-gray-500">Cash On Delivery</label>
        </span>
        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-semibold">privacy policy.</span></p>

        </div>
          </div>
          
        </div>
        
      </div>
      </div>
      <Boxing />

    </div>
      </div>
    );
  }