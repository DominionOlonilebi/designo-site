import Image from 'next/image';
import React from 'react'
import ImageHeroPhones from '@/public/hero-img/image-hero-phones.png';

const Hero = () => {
  return (
    <section className='hero-container bg-[#E7816B] mb-44 lg:w-[77%] sm:w-[93%] mx-auto  rounded-2xl'>
        <div className=" flex items-center flex-col justify-center mb-10 lg:pb-0 sm:pb-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%]  gap-10 items-center w-[87%] mx-auto">
          <div className="w-full">
            <div
              className="mt-7 pl-4  text-white lg:text-start sm:text-center"
            >
              <h4 data-aos="fade-right" data-aos-delay="700" className="h4 text-[17px] lg:text-[48px] sm:text-[48px] font-extrabold pt-24 mb-10 leading-[45px]">
              Award-winning custom
               designs and digital branding solutions
              </h4>
              <p data-aos="fade-left" data-aos-delay="700" className="text-[14px] lg:text-[16px] sm:text-[18px] mb-10">
              With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
              </p>
            </div>
            <div
              
              className="mt-7 pl-4 lg:text-start sm:text-center"
            >
              
              <button className="text-[14px] lg:text-[15px] sm:text-[16px] hover:bg-[#FFAD9B] hover:text-white uppercase py-4 px-8 mb-36 bg-white text-black rounded-lg font-semibold">
                learn more
              </button>
            </div>
            
          </div>
          <div className="w-full hero-img">
          <div
              data-aos="zoom-in"
              data-aos-delay="800"
              className="lg:mt-7 sm:-mt-52  pl-4"
            >
              <Image src={ImageHeroPhones} alt="designo"
              className="object-fit  mx-auto lg:w-[780px] sm:w-[450px] sm:h-[400px] lg:h-[502px] w-[150px] h-[280px] scale-125 rounded-2xl "/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero