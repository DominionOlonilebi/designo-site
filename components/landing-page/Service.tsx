import Image from "next/image";
import React from "react";
import IllustrationResourceful from "@/public/hero-img/illustration-resourceful.svg";
import IllustrationPassionate from "@/public/hero-img/illustration-passionate.svg";
import IllustrationFriendly from "@/public/hero-img/illustration-friendly.svg";

const Service = () => {
  return (
    <>
      <section className="service-container mt-20">
        <div className=" flex items-center flex-col justify-center mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[33%_33%_33%]   items-center w-[77%] mx-auto text-center">
            <div className="w-full lg:grid sm:flex basis-2/4">
              <div
                data-aos="fade-up"
                data-aos-delay="800"
                className=" mt-10 pl-4 "
              >
                <Image
                  src={IllustrationPassionate}
                  alt="designo"
                  className="object-fit  mx-auto lg:w-[150px] sm:w-[300px] sm:h-[150px] lg:h-[150px] w-[110px] h-[115px] scale-125 rounded-2xl lg:mb-10 sm:mb-10 mb-5"
                />
              </div>
              <div className="lg:mt-0 sm:mt-16 mt-0 lg:mx-0 sm:mx-6 mx-0">
                <h3
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  className="lg:text-[20px] sm:text-[20px] text-[16px] font-bold mb-5"
                >
                  PASSIONATE
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-delay="800"
                  className="lg:text-[16px] sm:text-[16px] text-[14px] mb-4 mx-4"
                >
                  Each project starts with an in-depth brand research to ensure
                  we only create products that serve a purpose. We merge art,
                  design, and technology into exciting new solutions.
                </p>
              </div>
            </div>

            <div className="w-full lg:grid sm:flex basis-2/4">
              <div
                data-aos="fade-up"
                data-aos-delay="800"
                className=" mt-10 pl-4"
              >
                <Image
                  src={IllustrationResourceful}
                  alt="designo"
                  className="object-fit  mx-auto lg:w-[150px] sm:w-[300px] sm:h-[150px] lg:h-[150px] w-[110px] h-[115px] scale-125 rounded-2xl lg:mb-10 sm:mb-10 mb-5"
                />
              </div>
              <div className="lg:mt-0 sm:mt-16 mt-0 lg:mx-0 sm:mx-6 mx-0">
                <h3
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  className="lg:text-[20px] sm:text-[20px] text-[16px] font-bold mb-5"
                >
                  RESOURCEFUL
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-delay="800"
                  className="lg:text-[16px] sm:text-[16px] text-[14px] mb-4 mx-4"
                >
                  Everything that we do has a strategic purpose. We use an agile
                  approach in all of our projects and value customer
                  collaboration. It guarantees superior results that fulfill our
                  clients’ needs.
                </p>
              </div>
            </div>

            <div className="w-full lg:grid sm:flex basis-2/4">
              <div
                data-aos="fade-up"
                data-aos-delay="800"
                className=" mt-10 pl-4"
              >
                <Image
                  src={IllustrationFriendly}
                  alt="designo"
                  className="object-fit  mx-auto lg:w-[150px] sm:w-[300px] sm:h-[150px] lg:h-[150px] w-[110px] h-[115px] scale-125 rounded-2xl lg:mb-10 sm:mb-10 mb-5"
                />
              </div>
              <div className="lg:mt-0 sm:mt-16 mt-0 lg:mx-0 sm:mx-6 mx-0">
                <h3
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  className="lg:text-[20px] sm:text-[20px] text-[16px] font-bold mb-5"
                >
                  FRIENDLY
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-delay="800"
                  className="lg:text-[16px] sm:text-[16px] text-[14px] mb-4 mx-4"
                >
                  {" "}
                  We are a group of enthusiastic folks who know how to put
                  people first. Our success depends on our customers, and we
                  strive to give them the best experience a company can provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='service-container mt-20'>
<div className=" flex items-center flex-col justify-center mb-10">
<div className="grid  lg:grid-cols-[33%_33%_33%]   items-center lg:w-[77%] sm:w-[90%]  mx-auto text-center">
  <div className="w-full  lg:grid-col sm:flex basis-2/4">
  <div
      data-aos="fade-up"
      data-aos-delay="800"
      className=" mt-10 pl-4 "
    >
      
      <Image src={IllustrationPassionate} alt="designo"
      className="object-fit   mx-auto lg:w-[150px] sm:w-[230px] sm:h-[300px] lg:h-[150px] w-[150px] h-[280px] scale-125 rounded-2xl mb-10"/>
    </div>
    <div className='lg:mt-0 sm:mt-20 lg:mx-0 sm:mx-8  sm:w-[60%]'>
    <h3 data-aos="zoom-in" data-aos-delay="900" className='text-[20px] font-bold mb-5'>PASSIONATE</h3>
    <p data-aos="fade-up"
      data-aos-delay="800" className='text-[16px] mb-4 mx-4'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
  </div>
  </div>

  <div className="w-full lg:grid sm:flex basis-2/4">
  <div
      data-aos="fade-up"
      data-aos-delay="800"
      className=" mt-10 pl-4 "
    >
      
      <Image src={IllustrationResourceful} alt="designo"
      className="object-fit   mx-auto lg:w-[150px] sm:w-[230px] sm:h-[300px] lg:h-[150px] w-[150px] h-[280px] scale-125 rounded-2xl mb-10"/>
    </div>
    <div className='lg:mt-0 sm:mt-20 lg:mx-0 sm:mx-8 lg:w-0 sm:w-[60%]'>
    <h3 data-aos="zoom-in" data-aos-delay="900" className='text-[20px] font-bold mb-5'>RESOURCEFUL</h3>
    <p data-aos="fade-up"
      data-aos-delay="800" className='text-[16px] mb-4 mx-4'>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
  </div>
  </div>


  <div className="w-full lg:grid sm:flex basis-2/4">
  <div
      data-aos="fade-up"
      data-aos-delay="800"
      className=" mt-10 pl-4 "
    >
      
      <Image src={IllustrationFriendly} alt="designo"
      className="object-fit   mx-auto lg:w-[150px] sm:w-[230px] sm:h-[300px] lg:h-[150px] w-[150px] h-[280px] scale-125 rounded-2xl mb-10"/>
    </div>
    <div className='lg:mt-0 sm:mt-20 lg:mx-0 sm:mx-8 lg:w-0 sm:w-[60%]'>
    <h3 data-aos="zoom-in" data-aos-delay="900" className='text-[20px] font-bold mb-5'>FRIENDLY</h3>
    <p data-aos="fade-up"
      data-aos-delay="800" className='text-[16px] mb-4 mx-4'>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
  </div>
  </div>
  
</div>
</div>
</section> */}
    </>
  );
};

export default Service;
