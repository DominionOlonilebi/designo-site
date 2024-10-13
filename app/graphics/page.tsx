import React from "react";
import ImageAppDesign from "@/public/hero-img/image-app-design.jpg";
import Image from "next/image";
import Link from "next/link";
import ImageWebDesign from "@/public/hero-img/image-web-design-large.jpg";
import data from "../data";

const Graphics = () => {
  const { graphicsData } = data;

  return (
    <>
      <section className="footer-section ">
        <div className=" bg-[#E7816B] lg:w-[77%] sm:w-[77%] w-full mt-8 text-center items-center mx-auto lg:rounded-xl sm:rounded-xl rounded-none">
          <div data-aos="fade-up" className=" pl-4 py-24 text-white">
            <h4
              data-aos="zoom-in"
              data-aos-delay="800"
              className="h4 text-[30px] lg:text-[48px] sm:text-[37px] font-semibold  mb-5 "
            >
              Graphic Design{" "}
            </h4>
            <p
              data-aos="fade-right"
              data-aos-delay="800"
              className="text-[15px] lg:text-[18px] sm:text-[16px] leading-loose"
            >
              We deliver eye-catching branding materials that are <br />
              tailored to meet your business objectives.
            </p>
          </div>
        </div>
      </section>

      <section className="web-container mx-auto py-36 px-8 lg:w-[83%] -mb-16">
        <div
          data-aos="fade-up"
          className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 "
        >
          {graphicsData.map((web, index) => (
            <div
              key={index}
              className="text-center bg-[#FDF3F0] hover:bg-[#E7816B] hover:text-white rounded-xl shadow-md lg:w-[330px] sm:w-[350px]"
            >
              <img
                data-aos="zoom-in"
                data-aos-delay="500"
                src={web.image}
                alt="web image"
                className="rounded-t-xl lg:w-96 lg:h-60 sm:h-60 sm:w-80"
              />
              <div className="px-6 py-8">
                <h3
                  data-aos="fade-right"
                  data-aos-delay="500"
                  className="text-[#E7816B] hover:text-white  font-medium uppercase text-[20px] mb-3"
                >
                  {web.name}{" "}
                </h3>
                <p
                  data-aos="fade-left"
                  data-aos-delay="600"
                  className="text-[16px] text-[#333136] hover:text-white lg:leading-loose sm:leading-loose leading-6"
                >
                  {web.description}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* App Design */}
      <section className="design-container ">
        <div className="flex items-center flex-col justify-center mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[53%_47%] sm:grid-cols-[53%_47%] text-center items-center lg:w-[64%] sm:w-[92%] mx-auto">
            <div data-aos="fade-left" className="relative ">
              <Image
                src={ImageAppDesign}
                alt="App Design"
                className="object-cover mx-auto lg:w-[330px] sm:w-[280px] sm:h-[200px] lg:h-[200px] w-[230px] h-[125px] scale-125 lg:mb-16 sm:mb-16 mb-10 rounded-2xl mt-16"
              />
              <div className="absolute inset-0 bg-neutral-950 opacity-60 object-cover mx-auto lg:w-[330px] sm:w-[280px] sm:h-[200px] lg:h-[200px] w-[230px] h-[125px] scale-125  rounded-2xl mt-16"></div>
              <div
                data-aos="zoom-in"
                className="absolute inset-0 flex flex-col justify-center items-center text-white text-center"
              >
                <h2 className="lg:text-4xl sm:text-2xl text-lg font-semibold mb-1">
                  App Design
                </h2>
                <Link href="/apps">
                  <button className="lg:text-[20px] sm:text-[17px] text-[14px] underline">
                    View projects
                  </button>
                </Link>
              </div>
            </div>

            {/* Graphic Design */}

            <div data-aos="fade-left" className="relative">
              <Image
                src={ImageWebDesign}
                alt="web Design"
                className="object-cover mx-auto lg:w-[330px] sm:w-[280px] sm:h-[200px] lg:h-[200px] w-[230px] h-[125px] scale-125 rounded-2xl"
              />
              <div className="absolute inset-0 bg-neutral-950 opacity-60 object-cover mx-auto lg:w-[330px] sm:w-[280px] sm:h-[200px] lg:h-[200px] w-[230px] h-[125px] scale-125 rounded-2xl"></div>
              <div
                data-aos="zoom-in"
                className="absolute inset-0 flex flex-col justify-center items-center text-white text-center"
              >
                <h2 className="lg:text-4xl sm:text-2xl text-lg font-semibold mb-1">
                  Web Design
                </h2>
                <Link href="/web">
                  <button className="lg:text-[20px] sm:text-[17px] text-[14px] underline">
                    View projects
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Graphics;
