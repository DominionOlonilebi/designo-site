import React from "react";
import TorontoFlatline2 from "@/public/about-us/toronto_flatline 2.png";
import LondonFlatline from "@/public/about-us/london_flatline.png";
import SydneyFlatline from "@/public/about-us/sydney__flatline.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="contact-container bg-[#E7816B] mb-32 lg:w-[77%] sm:w-[82%] mx-auto lg:h-[450px] rounded-xl lg:pb-0 sm:pb-10 pb-10">
        <div className=" flex items-center flex-col justify-center mb-10">
          <div
            className="grid grid-cols-1 lg:grid-cols-[60%_40%]  w-[85%] mx-auto items-center 
        "
          >
            <div className="w-full hero-img">
              <div className="lg:mt-2 sm:mt-0 lg:pl-4 sm:pl-0 pl-0  text-white lg:text-start sm:text-start text-center">
                <h4
                  data-aos="fade-right"
                  data-aos-delay="700"
                  className="h4 text-[27px] lg:text-[40px] sm:text-[36px] font-semibold lg:pt-10 pt-24 mb-7 leading-tight"
                >
                  Contact Us
                </h4>
                <p
                  data-aos="fade-left"
                  data-aos-delay="700"
                  className="text-[14px] leading-7 lg:text-[18px] sm:text-[16px] mb-4 lg:w-[440px]"
                >
                  Ready to take it to the next level? Let’s talk about your
                  project or idea and find out how we can help your business
                  grow. If you are looking for unique digital experiences that’s
                  relatable to your users, drop us a line.
                </p>
              </div>
            </div>
            <div className="w-full ">
              <div
                data-aos="zoom-in"
                data-aos-delay="800"
                className="lg:mt-16 sm:mt-5 mt-5 sm:pl-0 lg:pl-4"
              >
                <form className="max-w-md mx-auto">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="name"
                      name="floating_name"
                      id="floating_name"
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_name"
                      className="peer-focus:font-medium absolute lg:text-lg text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute lg:text-lg text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="num"
                      name="floating_num"
                      id="floating_num"
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_num"
                      className="peer-focus:font-medium absolute lg:text-lg text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone
                    </label>
                  </div>

                  <label
                    htmlFor="message"
                    className="block  text-sm font-medium text-white mb-10 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    className="block mb-6 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    placeholder=" "
                  ></textarea>
                  <div className="lg:text-end">
                    <button
                      type="submit"
                      className="text-black bg-white hover:bg-[#FFAD9B] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5  dark:bg-gray-200 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase "
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* card */}

      <section className="service-container lg:my-40 sm:my-28 my-16">
        <div className=" flex items-center flex-col justify-center mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[33%_33%_33%]  sm:grid-cols-[33%_33%_33%]  items-center sm:w-[95%] lg:w-[77%] mx-auto text-center">
            <div className="w-full mb-5">
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className=" mt-10 pl-4 "
              >
                <Image
                  src={TorontoFlatline2}
                  alt="designo"
                  className="object-fit  mx-auto lg:w-[120px] sm:w-[150px] sm:h-[130px] lg:h-[120px] w-[130px] h-[130px] scale-125 rounded-2xl mb-10"
                />
              </div>
              <h3
                data-aos="zoom-in"
                data-aos-delay="500"
                className="text-[20px] font-medium mb-5 uppercase"
              >
                canada
              </h3>
              <button
                type="button"
                className="py-2 px-4 uppercase bg-[#E7816B] text-white"
              >
                See location
              </button>
            </div>

            <div className="w-full mb-5">
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className=" mt-10 pl-4"
              >
                <Image
                  src={LondonFlatline}
                  alt="designo"
                  className="object-fit  mx-auto lg:w-[120px] sm:w-[150px] sm:h-[130px] lg:h-[120px] w-[130px] h-[130px] scale-125 rounded-2xl mb-10"
                />
              </div>
              <h3
                data-aos="zoom-in"
                data-aos-delay="500"
                className="text-[20px] font-medium mb-5 uppercase"
              >
                australia
              </h3>
              <button
                type="button"
                className="py-2 px-4 uppercase bg-[#E7816B] text-white"
              >
                See location
              </button>
            </div>

            <div className="w-full mb-5">
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className=" mt-10 pl-4"
              >
                <Image
                  src={SydneyFlatline}
                  alt="designo"
                  className="object-fit  mx-auto lg:w-[120px] sm:w-[150px] sm:h-[130px] lg:h-[120px] w-[130px] h-[130px] scale-125 rounded-2xl mb-10"
                />
              </div>
              <h3
                data-aos="zoom-in"
                data-aos-delay="500"
                className="text-[20px] font-medium mb-5 uppercase"
              >
                united kingdom
              </h3>
              <button
                type="button"
                className="py-2 px-4 uppercase bg-[#E7816B] text-white"
              >
                See location
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
