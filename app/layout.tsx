import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './assets/logo.svg'
import Img1 from "./assets/heart.svg"
import Img2 from "./assets/myAccount.svg"
import Img3 from "./assets/search.svg"
import Img4 from "./assets/shopping.svg"
import Contact from './pages/contact/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'Created with Next.js 13+',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className='flex justify-between items-center px-12 pt-5 bg-white text-black'>
      <Link href="/"><Image src={Logo} alt='logo'/></Link>
                    <ul className=' flex gap-12 p-4'>
                        <li ><Link href="" className={''}>Home</Link></li>
                        <li><Link href="/pages/shop">Shop</Link></li>
                        <li><Link href="">About</Link></li>
                        <li><Link href='/pages/contact'>Contact</Link></li>
                    </ul>
                    <span className='flex gap-5'>
                        <Link href='/registratsiya'>Sign up</Link>
                        <Link href='/login'>Login</Link>
                    </span>
                    <div>
                        <ul className='flex gap-9'>
                            <li><Link href="#"><Image src={Img2} alt="2" /></Link></li>
                            <li><Link href="#"><Image src={Img3} alt="3" /></Link></li>
                            <li><Link href="#"><Image src={Img1} alt="1" /></Link></li>
                            <li><Link href="#"><Image src={Img4} alt="4" /></Link></li>
                        </ul>
                    </div>
      </nav>
        <main className="container mx-auto mt-5">
          {children}

        </main>
        <footer className='flex flex-col justify-center'>
      <div className='flex justify-center	 gap-36'>
                        <div className='funiro'>
                            <h2>Funiro.</h2><br />
                            <p>400 University Drive Suite 200 Coral <br /> Gables, <br />
                                FL 33134 USA</p>

                        </div>
                        <div className='links flex gap-36'>
                            <span>
                                <p>Links</p><br />
                                <Link href={''} className='leading-10	font-medium	'>Home</Link><br />
                                <Link href={''} className='leading-10	font-medium	'>Shop</Link><br />
                                <Link href={''} className='leading-10	font-medium	'>About</Link><br />
                                <Link href={''}  className='leading-10	font-medium	'>Contact</Link>
                            </span>
                            <span>
                            <p>Help</p><br />
                                <Link href={''} className='leading-10	font-medium	'>Payment Options</Link><br />
                                <Link href={''} className='leading-10	font-medium	'>Returns</Link><br />
                                <Link href={''} className='leading-10	font-medium	'>Privacy Policies</Link>
                            </span>
                        </div>
                        <div className='inp'>
                            <p>Newsletter</p><br />
                            <div className='flex gap-2'>
                                <input className='border-b-2 pb-1 outline-none	' type="text" placeholder='Enter Your Email Address'/>
                                <Link href={''} className="pb-1 border-b-2">SUBSCRIBE</Link>
                            </div>
                        </div>

                    </div>
                    <hr className='w-10/12	' />
                        <p className='all'>2024 furino. All rights reverved</p>
      </footer>
      </body>
    </html>
  )
}