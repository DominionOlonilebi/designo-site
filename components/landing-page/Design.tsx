import Image from 'next/image';
import React from 'react';
import ImageWebDesignLarge from '@/public/hero-img/image-web-design-large.jpg';
import ImageAppDesign from '@/public/hero-img/image-app-design.jpg';
import ImageGraphicDesign from '@/public/hero-img/image-graphic-design.jpg';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Design = () => {
  return (
    <section className='design-container'>
      <div className="flex items-center flex-col justify-center mb-10">
        <div className="grid sm:grid-cols-1 lg:grid-cols-[53%_47%] text-center items-center lg:w-[77%] sm:w-[90%] mx-auto">
          {/* Web Design */}
          <div className="relative w-full">
            
              <div
                data-aos="flip-left"
                data-aos-delay="500"
                className="relative  "
              >
                <Image
                  src={ImageWebDesignLarge}
                  alt="Web Design"
                  className="object-cover mx-auto lg:w-[400px] sm:w-[585px] sm:h-[210px] lg:h-[500px] w-[150px] h-[280px] scale-125 rounded-2xl"
                />
                <div className="absolute inset-0 bg-neutral-950 opacity-60 object-cover hover:bg-[#fcdcd3] mx-auto lg:w-[400px] sm:w-[585px] sm:h-[210px] lg:h-[500px] w-[150px] h-[280px] scale-125 rounded-2xl"></div>
                <div data-aos="zoom-in" className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                  <h2 className="lg:text-5xl sm:text-[40px] font-semibold">Web Design</h2>
                  <Link href="/web"><button className='text-[20px] underline'>View projects </button></Link>
                </div>
              </div>
            
          </div>

          {/* App Design */}
          <div className="relative w-full  ">
            
              <div
                data-aos="flip-down"
                data-aos-delay="600"
                className="relative lg:mb-20 sm:mb-[50px] lg:mt-0 sm:mt-[70px]"
              >
                <Image
                  src={ImageAppDesign}
                  alt="App Design"
                  className="object-cover mx-auto lg:w-[400px] sm:w-[585px] sm:h-[210px] lg:h-[240px] w-[110px] h-[180px] scale-125 lg:mb-16 sm:mb-[70px] rounded-2xl"
                />
                <div className="absolute inset-0 bg-neutral-950 opacity-60 object-cover mx-auto lg:w-[400px] sm:w-[585px] sm:h-[210px] lg:h-[240px] w-[110px] h-[180px] scale-125  rounded-2xl"></div>
                <div data-aos="zoom-in" className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                  <h2 className="lg:text-5xl sm:text-[40px] font-semibold">App Design</h2>
                  <Link href="/apps"><button className='text-[20px] underline'>View projects</button></Link>
                </div>
              </div>
            
          

          {/* Graphic Design */}
            
              <div
                data-aos="flip-up"
                data-aos-delay="300"
                className="relative"
              >
                <Image
                  src={ImageGraphicDesign}
                  alt="Graphic Design"
                  className="object-cover mx-auto lg:w-[400px] sm:w-[585px] sm:h-[210px] lg:h-[240px] w-[110px] h-[180px] scale-125 rounded-2xl"
                />
                <div className="absolute inset-0 bg-neutral-950 opacity-60 object-cover mx-auto lg:w-[400px] sm:w-[585px] sm:h-[210px] lg:h-[240px] w-[110px] h-[180px] scale-125 rounded-2xl"></div>
                <div data-aos="zoom-in" className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                  <h2 className="lg:text-5xl sm:text-[40px] font-semibold">Graphic Design</h2>
                  <Link href="/graphics"><button className='text-[20px] underline'>View projects</button></Link>
                </div>
              </div>
            
          </div>
          
        </div>
      </div>
    </section>


  );
};

export default Design;
