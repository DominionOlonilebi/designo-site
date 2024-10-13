import React from "react";
import LogoLight from "@/public/shared-img/logo-light.png";
import Image from "next/image";
import IconFacebook from "@/public/shared-img/icon-facebook.svg";
import IconTwitter from "@/public/shared-img/icon-twitter.svg";
import IconPinterest from "@/public/shared-img/icon-pinterest.svg";
import IconInstagram from "@/public/shared-img/icon-instagram.svg";
import IconYoutube from "@/public/shared-img/icon-youtube.svg";

const Footer = () => {
  return (
    <>
      <div className="relative lg:pt-52 sm:pt-80 pt-52">
        <section className="call-section bg-[#E7816B] lg:w-[80%] sm:w-[92%] sm:h-[55%] w-[93%] rounded-xl lg:py-3 sm:py-0 py-12 absolute z-10  top-0 lg:left-36 sm:left-8 left-4 mx-auto ">
          <div className=" flex items-center flex-col justify-center ">
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%]  gap-10 items-center w-[84%] mx-auto">
              <div className="w-full ">
                <div className=" pl-1 lg:text-start text-center text-white">
                  <h4
                    data-aos="fade-right"
                    className="h4 text-[27px] lg:text-[40px] sm:text-[40px] font-medium mb-5 lg:mt-0 sm:mt-20"
                  >
                    Let’s talk about <br /> your project
                  </h4>
                  <p
                    data-aos="fade-left"
                    className="text-[15px] lg:text-[18px] sm:text-[16px] "
                  >
                    Ready to take it to the next level? Contact us today
                    <br /> and find out how our expertise can help your business
                    grow.
                  </p>
                </div>
              </div>
              <div className="w-full hero-img lg:text-start text-center">
                <div data-aos="zoom-in" className=" pl-4 end-0 mx-auto">
                  <button className="text-[14px] lg:mt-36 sm:-mt-16 lg:text-[15px] sm:text-[16px] hover:bg-[#FFAD9B] hover:text-white uppercase lg:py-4 lg:px-8 sm:py-4 sm:px-8 py-2 px-4 lg:mb-16 sm:mb-24 bg-white text-black rounded-lg font-medium">
                    Get in touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-container relative bg-[#1D1C1E] text-white lg:pt-32 pt-44  pb-5 z-0">
          <nav className="uppercase">
            <div className="lg:w-[80%] sm:w-[94%] flex flex-wrap items-center lg:justify-between sm:justify-between justify-center mx-auto p-7">
              <a href="/" className="">
                <Image
                  src={LogoLight}
                  className="h-5 w-[133px]"
                  alt="designo"
                />
              </a>

              <div className=" w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 justify-center text-center   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-neutral-400 lg:bg-[#E7816B] lg:text-white lg:px-4 bg-transparent  rounded md:bg-transparent md:text-[#E7816B] md:p-0 dark:text-neutral-400 "
                      aria-current="page"
                    >
                      our company
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-neutral-400 rounded  md:hover:bg-transparent md:border-0 md:hover:text-[#E7816B] md:p-0 dark:text-neutral-400 md:dark:hover:text-[#E7816B]  md:dark:hover:bg-transparent"
                    >
                      location
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-neutral-400 rounded  md:hover:bg-transparent md:border-0 md:hover:text-[#E7816B] md:p-0 dark:text-neutral-400 md:dark:hover:text-[#E7816B]  dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <hr className="hidden lg:w-[80%] sm:w-[94%] items-center mx-auto text-neutral-700" />
          <div className=" flex items-center flex-col justify-center lg:mt-9 mt-3 text-[16px]">
            <div className="grid grid-cols-1 lg:grid-cols-[33%_44%_23%] sm:grid-cols-[33%_44%_23%]  items-center lg:w-[80%] sm:w-[94%] mx-auto ">
              <div className="w-full">
                <p className=" mb-8 mx-4 leading-loose text-neutral-400">
                  <span className="font-medium text-lg">
                    Designo Central Office
                  </span>
                  <br />
                  3886 Wellington Street
                  <br /> Toronto, Ontario M9C 3J5
                </p>
              </div>

              <div className="w-full">
                <p className=" mb-8 mx-4 leading-loose text-neutral-400">
                  <span className="font-medium text-lg">
                    Contact Us (Central Office)
                  </span>
                  <br /> P : +1 253-863-8967
                  <br />M : contact@designo.co
                </p>
              </div>

              <div className="flex justify-center mb-5 items-center text-center">
                <div className="grid grid-cols-5 gap-2 pb-6  justify-center items-center">
                  <button className="bg-transparent border-none p-0 transition duration-300 hover:scale-125">
                    <a href="/" target="_blank">
                      {" "}
                      <Image
                        src={IconFacebook}
                        alt="designo"
                        className="w-[20px] mx-2"
                      />
                    </a>
                  </button>
                  <button className="bg-transparent border-none p-0 transition duration-300 hover:scale-125">
                    <a href="/" target="_blank">
                      <Image
                        src={IconYoutube}
                        alt="designo"
                        className="w-[20px]"
                      />
                    </a>
                  </button>
                  <button className="bg-transparent border-none p-0 transition duration-300 hover:scale-125">
                    <Image
                      src={IconTwitter}
                      alt="designo"
                      className="w-[20px]"
                    />
                  </button>
                  <button className="bg-transparent border-none p-0 transition duration-300 hover:scale-125">
                    <a href="/" target="_blank">
                      <Image
                        src={IconPinterest}
                        alt="designo"
                        className="w-[20px]"
                      />
                    </a>
                  </button>
                  <button className="bg-transparent border-none p-0 transition duration-300 hover:scale-125">
                    <a href="/" target="_blank">
                      <Image
                        src={IconInstagram}
                        alt="designo"
                        className="w-[20px]"
                      />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
