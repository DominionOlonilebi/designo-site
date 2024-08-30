import React from 'react'

const Contact = () => {
  return (
    <div className=''>
        <section className='call-section bg-[#E7816B] lg:w-[77%] sm:w-[92%] mt-20 items-center mx-auto rounded-xl'>
        <div className=" flex items-center flex-col justify-center ">
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%]  gap-10 items-center w-[80%] mx-auto">
          <div className="w-full ">
            <div
              
              className=" pl-4 lg:text-start sm:text-center text-white"
            >
              <h4 data-aos="fade-right" className="h4 text-[17px] lg:text-[40px] sm:text-[40px] font-medium  mb-5 lg:mt-0 sm:mt-28">
              Let’s talk about <br/> your project
              </h4>
              <p data-aos="fade-left" className="text-[14px] lg:text-[18px] sm:text-[16px] ">
              Ready to take it to the next level? Contact us today<br/> and find out how our expertise can help your business grow.
              </p>
            </div>
            
            
          </div>
          <div className="w-full hero-img lg:text-start sm:text-center">
          <div
              data-aos="zoom-in"
              className=" pl-4 end-0 mx-auto"
            >
              
              <button className="text-[14px] lg:mt-36 sm:-mt-16 lg:text-[15px] sm:text-[16px] hover:bg-[#FFAD9B] hover:text-white uppercase py-4 px-8 lg:mb-16 sm:mb-24 bg-white text-black rounded-lg font-medium">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Contact