import React from 'react'
import LogoLight from '@/public/shared-img/logo-light.png';
import Image from 'next/image';
import IconFacebook from '@/public/shared-img/icon-facebook.svg';
import IconTwitter from '@/public/shared-img/icon-twitter.svg';
import IconPinterest from '@/public/shared-img/icon-pinterest.svg';
import IconInstagram from '@/public/shared-img/icon-instagram.svg';
import IconYoutube from '@/public/shared-img/icon-youtube.svg';


const Footer = () => {
  return (
    <>
    <section className='footer-section bg-[#E7816B] w-[77%] items-center mx-auto rounded-xl'>
        <div className=" flex items-center flex-col justify-center mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%]  gap-10 items-center w-[80%] mx-auto">
          <div className="w-full">
            <div
              data-aos="fade-up"
              className="mt-7 pl-4  text-white"
            >
              <h4 className="h4 text-[17px] lg:text-[48px] sm:text-[22px] font-medium pt-40 mb-10">
              Let's talk about<br/> your project
              </h4>
              <p className="text-[14px] lg:text-[16px] sm:text-[16px] mb-10">
              Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
              </p>
            </div>
            
            
          </div>
          <div className="w-full hero-img">
          <div
              data-aos="fade-up"
              className="mt-7 pl-4 "
            >
              
              <button className="text-[14px] lg:text-[15px] sm:text-[16px] hover:bg-[#FFAD9B] hover:text-white uppercase py-4 px-5 mb-36 bg-white text-black rounded-lg font-medium">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='footer-container mt-20 bg-black text-white'>
        <div className=" flex items-center flex-col justify-center mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[33%_33%_33%]   items-center w-[77%] mx-auto text-center">
          <div className="w-full">
          <div
              data-aos="fade-up"
              className=" mt-10 pl-4 "
            >
              <Image src={LogoLight} alt="footer"
              className="object-fit  mx-auto lg:w-[100px] sm:w-[250px] sm:h-[300px] lg:h-[100px] w-[150px] h-[280px] scale-125 rounded-2xl mb-3"/>
            </div>
            <p className='text-[16px] mb-4 mx-4'>Designo Central Office<br/>
            3886 Wellington Street<br/> Toronto, Ontario M9C 3J5</p>
          </div>

          <div className="w-full">
            <h3 className='text-[20px] font-bold mb-5'>RESOURCEFUL</h3>
            <p className='text-[16px] mb-4 mx-4'>Contact Us (Central Office)<br/> P : +1 253-863-8967<br/> 
            M : contact@designo.co</p>
          </div>


          <div className="flex justify-center mb-5 items-center text-center">
          <div
            className="grid grid-cols-5 gap-2 pb-6  justify-center items-center"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <button className="bg-transparent border-none p-0 transition duration-300 hover:scale-125">
              <a
                href="/"
                target="_blank"
              >
                {" "}
                <Image src={IconFacebook} alt="designo" className="w-[20px]" />
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


          {/* <div className="w-full">
          <div
              data-aos="fade-up"
              className=" mt-10 pl-4"
            >
              <Image src={IconFacebook} alt="designo"
              className="object-fit  mx-auto lg:w-[150px] sm:w-[250px] sm:h-[300px] lg:h-[150px] w-[150px] h-[280px] scale-125 rounded-2xl mb-10"/>
              <Image src={IconYoutube} alt="designo"
              className="object-fit  mx-auto lg:w-[150px] sm:w-[250px] sm:h-[300px] lg:h-[150px] w-[150px] h-[280px] scale-125 rounded-2xl mb-10"/>
              <Image src={IconTwitter} alt="designo"
              className="object-fit  mx-auto lg:w-[150px] sm:w-[250px] sm:h-[300px] lg:h-[150px] w-[150px] h-[280px] scale-125 rounded-2xl mb-10"/>
              <Image src={IconPinterest} alt="designo"
              className="object-fit  mx-auto lg:w-[150px] sm:w-[250px] sm:h-[300px] lg:h-[150px] w-[150px] h-[280px] scale-125 rounded-2xl mb-10"/>
              <Image src={IconInstagram} alt="designo"
              className="object-fit  mx-auto lg:w-[150px] sm:w-[250px] sm:h-[300px] lg:h-[150px] w-[150px] h-[280px] scale-125 rounded-2xl mb-10"/>
            </div>
            
          </div>
           */}
        </div>
      </div>
    </section>
    </>
  )
}

export default Footer