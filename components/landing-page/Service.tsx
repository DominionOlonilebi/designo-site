import Image from 'next/image';
import React from 'react'
import IllustrationResourceful from '@/public/hero-img/illustration-resourceful.svg';
import IllustrationPassionate from '@/public/hero-img/illustration-passionate.svg';
import IllustrationFriendly from '@/public/hero-img/illustration-friendly.svg'

const Service = () => {
  return (
    <section className='service-container mt-20'>
        <div className=" flex items-center flex-col justify-center mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[33%_33%_33%]   items-center w-[77%] mx-auto text-center">
          <div className="w-full">
          <div
              data-aos="fade-up"
              className=" mt-10 pl-4 "
            >
              <Image src={IllustrationPassionate} alt="designo"
              className="object-fit  mx-auto lg:w-[150px] sm:w-[250px] sm:h-[300px] lg:h-[150px] w-[150px] h-[280px] scale-125 rounded-2xl mb-10"/>
            </div>
            <h3 className='text-[20px] font-bold mb-5'>PASSIONATE</h3>
            <p className='text-[16px] mb-4 mx-4'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
          </div>

          <div className="w-full">
          <div
              data-aos="fade-up"
              className=" mt-10 pl-4"
            >
              <Image src={IllustrationResourceful} alt="designo"
              className="object-fit  mx-auto lg:w-[150px] sm:w-[250px] sm:h-[300px] lg:h-[150px] w-[150px] h-[280px] scale-125 rounded-2xl mb-10"/>
            </div>
            <h3 className='text-[20px] font-bold mb-5'>RESOURCEFUL</h3>
            <p className='text-[16px] mb-4 mx-4'>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
          </div>

          <div className="w-full">
          <div
              data-aos="fade-up"
              className=" mt-10 pl-4"
            >
              <Image src={IllustrationFriendly} alt="designo"
              className="object-fit  mx-auto lg:w-[150px] sm:w-[250px] sm:h-[300px] lg:h-[150px] w-[150px] h-[280px] scale-125 rounded-2xl mb-10"/>
            </div>
            <h3 className='text-[20px] font-bold mb-5'>FRIENDLY</h3>
            <p className='text-[16px] mb-4 mx-4'> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Service