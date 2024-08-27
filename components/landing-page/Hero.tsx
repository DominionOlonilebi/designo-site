import Image from 'next/image';
import React from 'react'
import ImageHeroPhone from '@/public/hero-img/image-hero-phone.png';

const Hero = () => {
  return (
    <section className='hero-container bg-[#E7816B]'>
        <div className=" flex items-center flex-col justify-center mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%]  gap-10 items-center w-[80%] mx-auto">
          <div className="w-full">
            <div
              data-aos="fade-up"
              className="mt-7 pl-4  text-white"
            >
              <h4 className="h4 text-[17px] lg:text-[48px] sm:text-[22px] font-medium pt-40 mb-10">
              Award-winning custom<br/> designs and digital branding solutions
              </h4>
              <p className="text-[14px] lg:text-[16px] sm:text-[16px] mb-10">
              With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="mt-7 pl-4 "
            >
              
              <button className="text-[14px] lg:text-[15px] sm:text-[16px] hover:bg-[#FFAD9B] hover:text-white uppercase py-4 px-5 mb-36 bg-white text-black rounded-lg font-medium">
                learn more
              </button>
            </div>
            
          </div>
          <div className="w-full hero-img">
          <div
              data-aos="fade-up"
              className="mt-28  pl-4"
            >
              <Image src={ImageHeroPhone} alt="designo"
              className="object-fit  mx-auto lg:w-[350px] sm:w-[250px] sm:h-[300px] lg:h-[510px] w-[150px] h-[280px] scale-125 rounded-2xl mb-10"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero