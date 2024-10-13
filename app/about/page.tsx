import React from "react";
import Image from "next/image";
import ImageAboutHero from "@/public/about-us/image-about-hero.jpg";
import ImageWorldClassTalent from "@/public/about-us/image-world-class-talent.jpg";
import ImageRealDeal from "@/public/about-us/image-real-deal.jpg";
import TorontoFlatline2 from "@/public/about-us/toronto_flatline 2.png";
import LondonFlatline from "@/public/about-us/london_flatline.png";
import SydneyFlatline from "@/public/about-us/sydney__flatline.png";

const page = () => {
  return (
    <div data-aos="zoom-in" data-aos-delay="800" className="mt-5 ">
      <div className="mb-32">
        <a
          href="/"
          className="flex-col-reverse flex lg:w-[1040px] sm:w-[750px] items-center bg-[#E7816B]  border-gray-200 rounded-xl shadow md:flex-row mx-auto  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-between  leading-normal lg:py-0 sm:py-8 py-12">
            <div className="lg:mx-24 sm:mx-12 mx-8 lg:text-start sm:text-start text-center">
              <h5 className="mb-2 lg:text-[48px] text-[30px] font-bold tracking-tight text-white dark:text-white">
                About Us
              </h5>
              <p className="mb-3 font-normal lg:text-[18px] text-white dark:text-gray-400 leading-loose ">
                Founded in 2010, we are a creative agency that produces lasting
                results for our clients. We’ve partnered with many startups,
                corporations, and nonprofits alike to craft designs that make
                real impact. We’re always looking forward to creating brands,
                products, and digital experiences that connect with our clients’
                audiences.
              </p>
            </div>
          </div>

          <Image
            data-aos="flip-right"
            data-aos-delay="800"
            className="object-fit lg:h-[450px] lg:w-[400px] w-full rounded-b-xl h-100 sm:h-[417px] sm:w-[350px] md:rounded-none md:rounded-e-xl"
            src={ImageAboutHero}
            alt=""
          />
        </a>
      </div>

      {/* world class talent */}
      <section>
        <a
          href="/"
          className="flex flex-col-reverse lg:w-[1040px] sm:w-[750px] items-center bg-[#FDF3F0]  border-gray-200 rounded-xl shadow md:flex-row-reverse mx-auto  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-between  leading-normal lg:py-0 sm:py-0 py-12">
            <div className="lg:mx-16 sm:mx-7 mx-8 lg:text-start sm:text-start text-center">
              <h5
                data-aos="zoom-in"
                data-aos-delay="500"
                className="mb-2 lg:text-[40px] text-[27px] font-medium tracking-tight text-[#E7816B] dark:text-white pt-10"
              >
                World-class talent
              </h5>
              <p
                data-aos="fade-right"
                data-aos-delay="500"
                className="mb-3 font-normal lg:text-[18px] text-[#333136] dark:text-gray-400 leading-loose"
              >
                We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from concept
                to launch, ensuring success in its given market. We are
                constantly updating our skills in a myriad of platforms.
              </p>
              <br />

              <p
                data-aos="fade-left"
                data-aos-delay="500"
                className="mb-3 font-normal lg:text-[18px] text-[#333136] dark:text-gray-400 leading-loose"
              >
                Our team is multi-disciplinary and we are not merely interested
                in form — content and meaning are just as important. We give
                great importance to craftsmanship, service, and prompt delivery.
                Clients have always been impressed with our high-quality
                outcomes that encapsulates their brand’s story and mission.
              </p>
            </div>
          </div>

          <Image
            className="object-cover lg:h-[530px] lg:w-[450px] w-full rounded-t-xl h-[440px] sm:h-[400px] sm:w-[480px] md:rounded-none md:rounded-s-xl lg:pt-0 sm:pt-0"
            src={ImageWorldClassTalent}
            alt=""
          />
        </a>
      </section>

      {/* card */}

      <section className="service-container lg:my-40 sm:my-32 my-24">
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

      {/* the real deal */}
      <section className="mb-32">
        <a
          href="/"
          className="flex flex-col-reverse lg:w-[1040px] sm:w-[750px] items-center bg-[#FDF3F0]  border-gray-200 rounded-xl shadow md:flex-row mx-auto  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-between  leading-normal lg:py-0 sm:py-0 py-12">
            <div className="lg:mx-16 sm:mx-9 mx-8 lg:text-start sm:text-start text-center">
              <h5
                data-aos="zoom-in"
                data-aos-delay="500"
                className="mb-2 lg:text-[40px] text-[27px] font-medium tracking-tight text-[#E7816B] dark:text-white"
              >
                The real deal
              </h5>
              <p
                data-aos="fade-right"
                data-aos-delay="500"
                className="mb-3 font-normal lg:text-[18px] text-[#333136] dark:text-gray-400 leading-loose"
              >
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </p>
              <br />

              <p
                data-aos="fade-left"
                data-aos-delay="500"
                className="mb-3 font-normal lg:text-[18px] text-[#333136] dark:text-gray-400 leading-loose"
              >
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </div>
          </div>

          <Image
            className="object-fit lg:h-[530px] lg:w-[450px] sm:h-[400px]  w-full rounded-d-xl h-[450px]  md:rounded-none md:rounded-e-xl"
            src={ImageRealDeal}
            alt=""
          />
        </a>
      </section>
    </div>
  );
};

export default page;
