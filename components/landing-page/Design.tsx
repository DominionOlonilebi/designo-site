import Image from 'next/image';
import React from 'react'
import ImageWebDesignLarge from '@/public/hero-img/image-web-design-large.jpg';
import ImageAppDesign from '@/public/hero-img/image-app-design.jpg';
import ImageGraphicDesign from '@/public/hero-img/image-graphic-design.jpg';

const Design = () => {
  return (
    <section className='design-container'>
        <div className=" flex items-center flex-col justify-center mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[53%_47%] text-center  items-center w-[57%] mx-auto">
          <div className="w-full">
          <div
              data-aos="fade-up"
              className=" lg:mt-[-170px] sm:mt-20  pl-4"
            >
              <Image src={ImageWebDesignLarge} alt="designo"
              className="object-fit absolute inset mx-auto lg:w-[330px] sm:w-[250px] sm:h-[300px] lg:h-[420px] w-[150px] h-[280px] scale-125 rounded-2xl"/>
                  <div className="absolute inset bg-gray-700 opacity-60 rounded-md"></div>
            </div>
            <div className="absolute  uppercase text-white text-center">
        <h2 className=" text-3xl mt-48 font-semibold">web design</h2>
        <p className='text-sm'>View projects</p>
    </div>
            
          </div>
          <div className="w-full mt-10 lg:mt-20">
            <div>
            <Image
              data-aos="fade-left"
              src={ImageAppDesign}
              alt="designo"
              className="object-fit   mx-auto lg:w-[400px] sm:w-[250px] sm:h-[300px] lg:h-[250px] w-[110px] h-[180px] scale-125 mb-4  rounded-2xl"
            />
                              <div className="absolute inset bg-gray-700 opacity-60 rounded-md"></div>
            <div className="absolute  uppercase text-white text-center">
        <h2 className=" text-3xl mt-48 font-semibold">app design</h2>
        <p className='text-sm'>View projects</p>
    </div>
            </div>
            <div>
            <Image
              data-aos="fade-left"
              src={ImageGraphicDesign}
              alt="designo"
              className="object-fit mx-auto lg:w-[400px] sm:w-[250px] sm:h-[300px] lg:h-[250px] w-[110px] h-[180px] scale-125 rounded-2xl"
            />
                                          <div className="absolute inset bg-gray-700 opacity-60 rounded-md"></div>
                                          <div className="absolute  uppercase text-white text-center">
        <h2 className=" text-3xl mt-48 font-semibold">graphic design</h2>
        <p className='text-sm'>View projects</p>
    </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Design