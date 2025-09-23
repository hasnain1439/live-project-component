import React from "react";
import firstImg from "../assets/website-img/first-img.png";
import secondImg from "../assets/website-img/second-img.png";
import thirdImg from "../assets/website-img/third-img.png";
import product1 from "../assets/Product/product-img.png";
import { FaQuoteRight, FaRegStar, FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import testimonials from "../assets/ttestimonials/testimonials.png";
import appStore from "../assets/app/appstore.png";
import playstore from "../assets/app/playstore.png"
function HomePageComponent() {
  return (
    <>
      {/* Material Section */}
      <div>
        <div className="p-[5%] bg-gray-300">
          {/* Section title */}
          <div className="text-center font-regular">
            <div className="relative">
              <h1 className="text-[2.125rem] text-[#2A2A2A] p-2">
                Shop By Material
              </h1>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[5.9375rem] bg-[#1D4ED8] h-0.5"></div>
            </div>
            <p className="text-[#6E6E6E] font-regular pt-[0.875rem]">
              Visit our shop to see amazing creations from our house
            </p>
          </div>
          {/* Section title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-[1.875rem]">
            {[firstImg, secondImg, thirdImg].map((item, i) => (
              <div key={i} className="relative">
                <img
                  src={item}
                  className="z-10 w-full min-h-[16.875rem]"
                  alt=""
                />
                <div className="max-w-[17.9375rem]  px-[2.1875rem] py-[1.375rem] text-[#222222] bg-[#FFFFFF] font-normal border border-[#DDDDDD] mx-auto mt-[-70px] z-20 relative">
                  <h2 className="text-[1.25rem] mb-[0.875rem]">
                    Counter Slabs Collection
                  </h2>
                  <h4 className="text-[0.875rem] border-b-[0.125rem] inline-block border-[#222222]">
                    Discover More
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Product Section */}
      <div>
        <div className="p-[5%]">
          {/* Section title */}
          <div className="text-center font-regular">
            <div className="relative">
              <h1 className="text-[2.125rem] text-[#2A2A2A] p-2">
                New In This Season
              </h1>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[5.9375rem] bg-[#1D4ED8] h-0.5"></div>
            </div>
            <p className="text-[#6E6E6E] font-regular pt-[0.875rem]">
              Visit our shop to see amazing creations from our house{" "}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1.875rem] mt-[3.75rem]">
            <div>
              <div className="p-[1.25rem] bg-gray-200">
                <button className="text-[14px] font-regular px-2 py-0.5 text-[#FFFFFF] bg-[#1D4ED8] rounded-[0.1875rem] ">
                  Trending
                </button>
                <div className=" py-[1.5625rem]">
                  <div className="min-w-[14.625rem]">
                    <img src={product1} className="w-full" alt="" />
                  </div>
                </div>
              </div>
              <div className="font-medium mt-4">
                <h5 className="font-regular text-[1.125rem]">
                  Countertop Slabs
                </h5>
                <div className="flex gap-2 my-[0.875rem]">
                  <div className="flex gap-2">
                    <FaStar className="text-[#FEC558]" />
                    <FaStar className="text-[#FEC558]" />
                    <FaStar className="text-[#FEC558]" />
                    <FaStar className="text-[#FEC558]" />
                    <FaRegStar className="text-[#FEC558]" />
                  </div>
                  <h4 className="text-[1rem] text-[#2A2A2A]">4.5 Rating</h4>
                </div>
                <h5 className="text-[1rem] text-[#2A2A2A]">$46.23</h5>
              </div>
            </div>
            <div>
              <div className="p-[1.25rem] bg-gray-200">
                <button className="text-[14px] font-regular px-2 py-0.5 text-[#FFFFFF] bg-[#1D4ED8] rounded-[0.1875rem] ">
                  Trending
                </button>
                <div className=" py-[1.5625rem]">
                  <div className="min-w-[14.625rem]">
                    <img src={product1} className="w-full" alt="" />
                  </div>
                </div>
              </div>
              <div className="font-medium mt-4">
                <h5 className="font-regular text-[1.125rem]">
                  Countertop Slabs
                </h5>
                <div className="flex gap-2 my-[0.875rem]">
                  <div className="flex gap-2">
                    <FaStar className="text-[#FEC558]" />
                    <FaStar className="text-[#FEC558]" />
                    <FaStar className="text-[#FEC558]" />
                    <FaStar className="text-[#FEC558]" />
                    <FaRegStar className="text-[#FEC558]" />
                  </div>
                  <h4 className="text-[1rem] text-[#2A2A2A]">4.5 Rating</h4>
                </div>
                <h5 className="text-[1rem] text-[#2A2A2A]">$46.23</h5>
              </div>
            </div>
            <div>
              <div className="p-[1.25rem] bg-gray-200">
                <button className="text-[14px] font-regular px-2 py-0.5 text-[#FFFFFF] bg-[#1D4ED8] rounded-[0.1875rem] ">
                  Trending
                </button>
                <div className=" py-[1.5625rem]">
                  <div className="min-w-[14.625rem]">
                    <img src={product1} className="w-full" alt="" />
                  </div>
                </div>
              </div>
              <div className="font-medium mt-4">
                <h5 className="font-regular text-[1.125rem]">
                  Countertop Slabs
                </h5>
                <div className="flex gap-2 my-[0.875rem]">
                  <div className="flex gap-2">
                    <FaStar className="text-[#FEC558]" />
                    <FaStar className="text-[#FEC558]" />
                    <FaStar className="text-[#FEC558]" />
                    <FaStar className="text-[#FEC558]" />
                    <FaRegStar className="text-[#FEC558]" />
                  </div>
                  <h4 className="text-[1rem] text-[#2A2A2A]">4.5 Rating</h4>
                </div>
                <h5 className="text-[1rem] text-[#2A2A2A]">$46.23</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discount Section */}
      <div className="bg-[#829B854D]">
        <div className="p-[5%]">
          <div className="flex flex-col justify-center items-center max-w-[500px] mx-auto ">
            <h5 className="text-[1rem] text-[#1D4ED8] font-medium">
              Get Discount 20% Off
            </h5>
            <h2 className="text-[1.5rem] leading-[1.625rem] sm:text-[2.125rem] font-medium text-[#2A2A2A] max-w-[31.25rem] text-center">
              Get our emails for info on new items, sales and more.
            </h2>
            <div className="flex items-center justify-between w-full mt-[3rem] pb-2 border-b border-[#2A2A2A]">
              <input
                type="email"
                className="basis-[95%] bg-transparent p-1 outline-none"
                placeholder="Enter your email"
              />
              <FaArrowRightLong className="basis-auto" />
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div>
        <div className="py-[5%]">
          {/* Section title */}
          <div className="text-center font-regular">
            <div className="relative">
              <h1 className="text-[2.125rem] text-[#2A2A2A] p-2">
                New In This Season
              </h1>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[5.9375rem] bg-[#1D4ED8] h-0.5"></div>
            </div>
            <p className="text-[#6E6E6E] font-regular pt-[0.875rem]">
              Visit our shop to see amazing creations from our house{" "}
            </p>
          </div>
          {/* Section title */}
          <div className="px-[5%] py-[2%] bg-[#F7F7F9] mt-[3.75rem]">
            <div className="grid md:grid-cols-2 max-w-[60.5rem] gap-[4.5rem] mx-auto ">
              <div>
                <div className="flex items-start flex-col sm:flex-row gap-6">
                  {/* Image + Quote Icon */}
                  <div className="min-w-[4.375rem] relative">
                    <img
                      src={testimonials}
                      alt="testimonial"
                      className="w-full h-auto"
                    />
                    <div className="absolute w-[1.875rem] h-[1.875rem] bottom-[-15px] start-1/2 -translate-x-1/2 rounded-full bg-[#1D4ED8] text-white flex justify-center items-center p-1 shadow-md">
                      <FaQuoteRight />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-6 py-[0.5rem]">
                    <div>
                      <h4 className="text-[#2A2A2A] text-[1.125rem] font-medium">
                        Jimmy Doe
                      </h4>
                      <h5 className="text-[1rem] text-[#6E6E6E] font-normal">
                        Customer
                      </h5>
                    </div>
                    <p className="text-[#4A4A4A] leading-relaxed">
                      "Lorem Ipsum available, the majority have suffered
                      alteration in some form, injected humour, or randomised
                      words which don't look even slightly believable."
                    </p>
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex gap-[0.875rem] font-regular">
                        <h1 className="text-[#2A2A2A] text-[2.75rem] leading-[2.75rem] ">
                          4.5
                        </h1>
                        <h5 className="text-[1rem] text-[#6E6E6E] self-end">
                          Rating
                        </h5>
                      </div>
                      <div className="flex gap-2">
                        <FaStar className="text-[#FEC558]" />
                        <FaStar className="text-[#FEC558]" />
                        <FaStar className="text-[#FEC558]" />
                        <FaStar className="text-[#FEC558]" />
                        <FaRegStar className="text-[#FEC558]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start flex-col sm:flex-row gap-6">
                  {/* Image + Quote Icon */}
                  <div className="min-w-[4.375rem] relative">
                    <img
                      src={testimonials}
                      alt="testimonial"
                      className="w-full h-auto"
                    />
                    <div className="absolute w-[1.875rem] h-[1.875rem] bottom-[-15px] start-1/2 -translate-x-1/2 rounded-full bg-[#1D4ED8] text-white flex justify-center items-center p-1 shadow-md">
                      <FaQuoteRight />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-6 py-[0.5rem]">
                    <div>
                      <h4 className="text-[#2A2A2A] text-[1.125rem] font-medium">
                        Jimmy Doe
                      </h4>
                      <h5 className="text-[1rem] text-[#6E6E6E] font-normal">
                        Customer
                      </h5>
                    </div>
                    <p className="text-[#4A4A4A] leading-relaxed">
                      "Lorem Ipsum available, the majority have suffered
                      alteration in some form, injected humour, or randomised
                      words which don't look even slightly believable."
                    </p>
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex gap-[0.875rem] font-regular">
                        <h1 className="text-[#2A2A2A] text-[2.75rem] leading-[2.75rem] ">
                          4.5
                        </h1>
                        <h5 className="text-[1rem] text-[#6E6E6E] self-end">
                          Rating
                        </h5>
                      </div>
                      <div className="flex gap-2">
                        <FaStar className="text-[#FEC558]" />
                        <FaStar className="text-[#FEC558]" />
                        <FaStar className="text-[#FEC558]" />
                        <FaStar className="text-[#FEC558]" />
                        <FaRegStar className="text-[#FEC558]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* APP Section */}
      <div>
        <div className="p-[5%]">
          <div className="p-[5%] bg-[#F7F7F9]">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="">
                <div className="text-center md:max-w-[390px] mx-auto  text-[#2A2A2A] text-regular">
                  <h2 className="text-[1.7988rem]">
                    Make your online shop easier with our mobile app
                  </h2>
                  <p className="text-[13.54px] my-[1.1875rem]">
                    We offer high-quality films and the best documentary
                    selection, and the ability to browse alphabetically and by
                    genre
                  </p>
                  <div className="flex justify-center items-center gap-[0.75rem]">
                    <div className="max-w-[6.3125rem]">
                      <img src={playstore} className="w-full" alt="playstore" />
                    </div>
                    <div className="max-w-[6.3125rem]">
                      <img src={appStore} className="w-full" alt="appStore" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[283px] mx-auto">
                <img src={product1} className="w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageComponent;
