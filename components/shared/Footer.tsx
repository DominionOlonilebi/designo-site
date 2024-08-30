import React from 'react'
import LogoLight from '@/public/shared-img/logo-light.png';
import Image from 'next/image';
import IconFacebook from '@/public/shared-img/icon-facebook.svg';
import IconTwitter from '@/public/shared-img/icon-twitter.svg';
import IconPinterest from '@/public/shared-img/icon-pinterest.svg';
import IconInstagram from '@/public/shared-img/icon-instagram.svg';
import IconYoutube from '@/public/shared-img/icon-youtube.svg';
import Contact from './Contact';


const Footer = () => {
  return (
    <>
    <Contact/>
    <section className='footer-container relative z-0 bg-[#1D1C1E] text-white pt-5  pb-5'>

    <nav className="uppercase">
  <div className="lg:w-[80%] sm:w-[94%] flex flex-wrap items-center justify-between mx-auto p-7">
    <a href="/" className="">
        <Image src={LogoLight}  className="h-5 w-[133px]" alt="designo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden  focus:outline-none focus:ring-2  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  text-white">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-[#E7816B] rounded md:bg-transparent md:text-[#E7816B] md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">our company</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#E7816B] md:p-0 dark:text-white md:dark:hover:text-[#E7816B] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">location</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#E7816B] md:p-0 dark:text-white md:dark:hover:text-[#E7816B] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<hr className='lg:w-[80%] sm:w-[94%] items-center mx-auto text-neutral-700'/>
        <div className=" flex items-center flex-col justify-center mt-20 text-[16px]">
        <div className="grid grid-cols-1 lg:grid-cols-[33%_44%_23%] sm:grid-cols-[33%_44%_23%]  items-center lg:w-[80%] sm:w-[94%] mx-auto ">
          <div className="w-full">
        
            <p className=' mb-4 mx-4 leading-loose'>Designo Central Office<br/>
            3886 Wellington Street<br/> Toronto, Ontario M9C 3J5</p>
          </div>

          <div className="w-full">
            <p className=' mb-4 mx-4 leading-loose'>Contact Us (Central Office)<br/> P : +1 253-863-8967<br/> 
            M : contact@designo.co</p>
          </div>


          <div className="flex justify-center mb-5 items-center text-center">
          <div
            className="grid grid-cols-5 gap-2 pb-6  justify-center items-center"
          >
            <button className="bg-transparent border-none p-0 transition duration-300 hover:scale-125">
              <a
                href="/"
                target="_blank"
              >
                {" "}
                <Image src={IconFacebook} alt="designo" className="w-[20px] mx-2" />
              </a>
            </button>
            <button className="bg-transparent border-none p-0 transition duration-300 hover:scale-125">
              <a
                href="/"
                target="_blank"
              >
                <Image src={IconYoutube} alt="designo" className="w-[20px]" />
              </a>
            </button>
            <button className="bg-transparent border-none p-0 transition duration-300 hover:scale-125">
              <Image src={IconTwitter} alt="designo" className="w-[20px]" />
            </button>
            <button className="bg-transparent border-none p-0 transition duration-300 hover:scale-125">
              <a href="/" target="_blank">
                <Image src={IconPinterest} alt="designo" className="w-[20px]" />
              </a>
            </button>
            <button className="bg-transparent border-none p-0 transition duration-300 hover:scale-125">
              <a href="/" target="_blank">
                <Image src={IconInstagram} alt="designo" className="w-[20px]" />
              </a>
            </button>
          </div>
        </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Footer