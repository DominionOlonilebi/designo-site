import React from 'react'
import ImageWebDesign from '@/public/hero-img/image-web-design-large.jpg'
import Image from 'next/image'
import Link from 'next/link'
import ImageGraphicDesign from '@/public/hero-img/image-graphic-design.jpg'
import data from '../data';


const Apps = () => {

    const { appData } = data;


  return (
    <>
        <section className='footer-section '>
          <div className=" bg-[#E7816B] w-[77%] mt-8 text-center items-center mx-auto rounded-xl">
            <div
              data-aos="fade-up"
              className=" pl-4 py-24 text-white"
            >
              <h4 data-aos="zoom-in"
              data-aos-delay="800" className="h4 text-[17px] lg:text-[48px] sm:text-[22px] font-bold  mb-5 ">
              App Design              </h4>
              <p data-aos="fade-right"
              data-aos-delay="800" className="text-[14px] lg:text-[18px] sm:text-[16px] leading-loose">
              Our mobile designs bring intuitive digital solutions<br/>
 to your customers right at their fingertips.              </p>
            </div>
          </div>
    </section>

<section className='web-container mx-auto py-36 px-8 lg:w-[83%] -mb-16'>
<div data-aos="fade-up" className='grid lg:grid-cols-3 gap-6 '>
    {appData.map((web, index) => (
            <div key={index} className='text-center bg-[#FDF3F0] hover:bg-[#E7816B] hover:text-white rounded-xl shadow-md'> 
                <img data-aos="zoom-in"
              data-aos-delay="500" src={web.image} alt='web image' className='rounded-t-xl'/>
                <div className="px-6 py-8">
                <h3 data-aos="fade-right"
              data-aos-delay="500" className='text-[#E7816B] hover:text-white  font-medium uppercase text-[20px] mb-3'>{web.name} </h3>
                <p data-aos="fade-left"
              data-aos-delay="600" className='text-[16px] text-[#333136] hover:text-white leading-loose'>{web.description} </p>
                </div>
            </div>

    ))}
</div>
</section>

 {/* App Design */}
 <section className='design-container '>
      <div className="flex items-center flex-col justify-center mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[53%_47%] text-center items-center w-[64%] mx-auto">
            
            <div
              data-aos="fade-left"
              className="relative "
            >
              <Image
                src={ImageWebDesign}
                alt="web Design"
                className="object-cover mx-auto lg:w-[330px] sm:w-[250px] sm:h-[300px] lg:h-[200px] w-[110px] h-[180px] scale-125 mb-16 rounded-2xl mt-16"
              />
              <div className="absolute inset-0 bg-neutral-950 opacity-60 object-cover mx-auto lg:w-[330px] sm:w-[250px] sm:h-[300px] lg:h-[200px] w-[110px] h-[180px] scale-125  rounded-2xl mt-16"></div>
              <div data-aos="zoom-in" className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                <h2 className="text-4xl font-semibold mb-1">Web Design</h2>
                <Link href="/web"><button className='text-[20px] underline'>View projects</button></Link>
              </div>
            </div>
          
        

        {/* Graphic Design */}
          
            <div
              data-aos="fade-left"
              className="relative"
            >
              <Image
                src={ImageGraphicDesign}
                alt="Graphic Design"
                className="object-cover mx-auto lg:w-[330px] sm:w-[250px] sm:h-[300px] lg:h-[200px] w-[110px] h-[180px] scale-125 rounded-2xl"
              />
              <div className="absolute inset-0 bg-neutral-950 opacity-60 object-cover mx-auto lg:w-[330px] sm:w-[250px] sm:h-[300px] lg:h-[200px] w-[110px] h-[180px] scale-125 rounded-2xl"></div>
              <div data-aos="zoom-in" className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                <h2 className="text-4xl font-semibold mb-1">Graphic Design</h2>
                <Link href="/graphics"><button className='text-[20px] underline'>View projects</button></Link>
              </div>
            </div>
        
        </div>
        </div>
        </section>
    </>
  )
}

export default Apps