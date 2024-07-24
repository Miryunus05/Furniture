import React from 'react'
import Boxing from '@/app/components/boxing';
import ProductsCard from '../../components/productsShop'
import Image from 'next/image';
import img1 from "../../assets/Logos.svg"
import img2 from "../../assets/arrow.svg"
import img3 from "../../assets/menu.svg"
import img4 from "../../assets/filtr.svg"
import img5 from "../../assets/Vectr.svg"


function page() {
  return (
    <div>
              <div className='fon'>
        <div className='fon-child'>
          <Image src={img1} alt="" />
          <h1>Shop</h1>
          <span>
            <p>Home  </p>
            <Image src={img2} alt="" />
            <p> Shop</p>
          </span>
        </div>
      </div>
      <div className=' relative '>
      <div className='filtr '>
                <div className='flex gap-6 border-r-slate-400'>
                    <span className='flex gap-3'>
                        <Image src={img4} alt="" />
                        <h5>Filter</h5>

                    </span>
                    <Image src={img5} alt="" />
                    <Image src={img3} alt="" />
                    |
                    <p className='showing'>Showing 1–16 of 32 results</p>
                </div>
                <div className='flex gap-6'>
                    <div className='flex items-center gap-4'>
                        <p className='short'>Show</p>
                        <input className='w-[55px] h-[55px] text-center outline-none' type="namber" placeholder='16' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className='short'>Short by</p>
                        <input className='w-[188px] h-[55px] text-center outline-none' type="text" placeholder='Default' />
                    </div>
                </div>
            </div>
      <ProductsCard />
      <div className='BN flex gap-6 absolute left-[35%] bottom-0'>
                    <span>Before</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>...</span>
                    <span>Next</span>
                </div>
     </div>
           <Boxing />
    </div>
  )
}

export default page
